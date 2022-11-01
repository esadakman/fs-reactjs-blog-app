import axios from "axios";
import { toastSuccess } from "../../helpers/customToastify";

const REGISTER_URL = "http://127.0.0.1:8000/users/register/";
const LOGIN_URL = "http://127.0.0.1:8000/users/auth/login/";
const LOGOUT_URL = "http://127.0.0.1:8000/users/auth/logout/";
const UPDATE_URL = "http://127.0.0.1:8000/users/profile/6/";
const API_URL = "http://127.0.0.1:8000/";

// Register user
const register = async (userData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(REGISTER_URL, userData, config);
  console.log(response);
  return response.data;
};

const login = async (loginData, navigate, checked) => {
  // console.log(loginData.user);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await axios.post(LOGIN_URL, loginData.user, config);
  if (res.data) {
    console.log(res.data);
    let id = res.data.user.id 
    const myToken = window.btoa(res.data.key);
    localStorage.setItem("token", myToken); 
    const config = {
      headers: {
        Authorization: `Token ${res.data.key}`,
        "Content-Type": "application/json",
      },
    }; 
    var rest = await axios(`${API_URL}users/profile/${id-2}/`,config); 
    toastSuccess("Logged In");
    loginData.navigate("/");
  }
  return rest.data;
};

const logout = async (navigate) => {
  let myKey = window.atob(localStorage.getItem("token"));
  try {
    var config = {
      method: "post",
      url: LOGOUT_URL,
      headers: {
        Authorization: `Token ${myKey}`,
      },
    };
    const res = await axios(config);
    // console.log(res);
    if (res.status === 200) {
      localStorage.clear();
      toastSuccess("User log out successfully.");
      navigate("/");
    }
  } catch (error) {
    console.log(error);
  }
};
 
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

const update = async (userData, navigate) => {
  let myKey = window.atob(localStorage.getItem("token"));
  // console.log(user);
  let image = userData.image;
  let user = userData.user;
  // console.log(image, user);
  var data = JSON.stringify({
    image,
    user, 
  });
  console.log(userData);
  // console.log(`${API_URL}users/profile/${id-2}/`)
  try {
    var config = {
      method: "put",
      url: UPDATE_URL,
      headers: {
        Authorization: `Token ${myKey}`,
        "Content-Type": "application/json",
      },
      data: data,
    };
    const res = await axios(config, data);
    if (res.status === 200) {
      toastSuccess("Blog has been successfully updated");
      // navigate("/register");
    }
  } catch (error) {
    console.log(error);
  }

  // const config = {
  //   headers: {
  //     Authorization: `Token ${res.data.key}`,
  //     "Content-Type": "application/json",
  //   },
  // }; 
  // var rest = await axios(`${API_URL}users/profile/${id-2}/`,config);
   
};

const authService = { register, login, logout, update };

export default authService;
