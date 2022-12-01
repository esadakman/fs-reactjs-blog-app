import axios from "axios";
import {
  toastError,
  toastSuccess,
  toastWarn,
} from "../../helpers/customToastify";
const userAPI = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  // timeout: 8000,

  baseURL: process.env.REACT_APP_API_URL + "/users",
});

// Register user
const register = async ({ userData, navigate, actions }) => {
  const response = await userAPI.post("/register/", userData);
  try {
    if (response.status === 201) {
      navigate("/login");
      actions.resetForm();
      toastSuccess("Your profile has been created succesfully !");
      return response.data;
    }
  } catch (error) {
    throw Error(error);
  }
};

const login = async ({ user, navigate, actions }) => {
  const res = await userAPI.post(`/auth/login/`, user);
  try {
    if (res.data) {
      if (res.status === 200) {
        let id = res.data.user.id;
        const myToken = window.btoa(res.data.key);
        localStorage.setItem("token", myToken);
        const config = {
          headers: {
            Authorization: `Token ${res.data.key}`,
          },
        };
        var rest = await userAPI(`/profile/${id}/`, config);
        localStorage.setItem("userInfo", JSON.stringify(rest.data));
        toastSuccess("Logged In");
        actions.resetForm();
        navigate("/");
        return rest.data;
      } else {
        return res.data;
      }
    }
  } catch (error) {
    throw Error(error);
  } 
};

const logout = async (navigate) => {
  let myKey = window.atob(localStorage.getItem("token"));
  try {
    // ! for preventing unauthorized error in postDetail page I changed the navigate function's place
    navigate("/login");
    var config = {
      method: "post",
      url: `/auth/logout/`,
      headers: {
        Authorization: `Token ${myKey}`,
      },
    };
    const res = await userAPI(config);
    if (res.status === 200) {
      localStorage.clear();
      toastSuccess(`${res.data.detail}`);
      return res.data;
    }
  } catch (error) {
    throw Error(error);
  }
};

const update = async ({ values, userId }) => {
  let myKey = window.atob(localStorage.getItem("token"));
  try {
    var config = {
      method: "put",
      headers: {
        Authorization: `Token ${myKey}`,
      },
      data: values,
    };
    const res = await userAPI(`/profile/${userId}/`, config);

    if (res.status === 200) {
      toastSuccess("Profile has been successfully updated");
      localStorage.setItem("userInfo", JSON.stringify(res.data));
      return res.data;
    }
  } catch (error) {
    if (error.request.responseText === `{"image":["Enter a valid URL."]}`) {
      toastWarn("Please enter a valid URL");
    } else {
      toastError("Oppss... Something went wrong. Please try again later ..");
    }
    throw Error(error);
  }
};

const authService = { register, login, logout, update };

export default authService;

//   try {
//     var config = {
//       method: "put",
//       url: UPDATE_URL,
//       headers: {
//         Authorization: `Token ${myKey}`,
//       },
//     };
//     const res = await axios(config);
//     console.log(res);
//     if (res.status === 200) {
//       setCurrentUser(false);
//       setMyKey(false);
//       toastSuccess("User log out successfully.");
//       navigate("/");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
