import axios from "axios";
import { toastError, toastSuccess } from "../../helpers/customToastify"; 

const axiosAPI = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  // timeout: 8000,

  baseURL: "http://127.0.0.1:8000/",
});
// Register user
const register = async ({userData,navigate}) => {
  const response = await axiosAPI.post("users/register/", userData);
  console.log(response);
  try {
    if (response.status === 201) {
      navigate('/login')
      toastSuccess('Your Profile has been created succesfully !')
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const login = async ({ user, navigate }) => {
  const res = await axiosAPI.post(`users/auth/login/`, user);
  try {
    if (res.data) {
      // if (res.status === 200) {
      console.log(res.data);
      let id = res.data.user.id;
      const myToken = window.btoa(res.data.key);
      // const userStorage = JSON.stringify(res.data.user);
      // localStorage.setItem("userInfo", window.btoa(userStorage) );
      localStorage.setItem("token", myToken);
      const config = {
        headers: {
          Authorization: `Token ${res.data.key}`,
        },
      };
      var rest = await axiosAPI(`users/profile/${id - 2}/`, config);
      // localStorage.setItem("userInfo", window.btoa(JSON.stringify(rest.data)) );
      localStorage.setItem("userInfo", JSON.stringify(rest.data));
      toastSuccess("Logged In");
      navigate("/");
      return rest.data;
    } else {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
  //   // return res.data
  // } finally {
  //   console.log('error');
  //   return rest.data
  // }
  // console.log('object');
};

const logout = async (navigate) => {
  let myKey = window.atob(localStorage.getItem("token"));
  try {
    var config = {
      method: "post",
      url: `users/auth/logout/`,
      headers: {
        Authorization: `Token ${myKey}`,
      },
    };
    const res = await axiosAPI(config);
    // console.log(res);
    if (res.status === 200) {
      localStorage.clear();
      toastSuccess(`${res.data.detail}`);
      navigate("/login");
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const update = async ({ image, user, userId }) => {
  let myKey = window.atob(localStorage.getItem("token"));
  var data = JSON.stringify({
    image,
    user,
  });
  try {
    var config = {
      method: "put",
      headers: {
        Authorization: `Token ${myKey}`,
      },
      data: data,
    };
    const res = await axiosAPI(`users/profile/${userId - 2}/`, config);
    if (res.status === 200) {
      toastSuccess("Blog has been successfully updated");
      // navigate("/register");
      return res.data;
    }
  } catch (error) {
    toastError("Oppss... Something went wrong. Please try again later ..");
    console.log(error);
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
