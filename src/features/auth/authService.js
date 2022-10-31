import axios from "axios";
import { toastSuccess } from "../../helpers/customToastify";

const REGISTER_URL = "http://127.0.0.1:8000/users/register/";
const LOGIN_URL = "http://127.0.0.1:8000/users/auth/login/";
const LOGOUT_URL = "http://127.0.0.1:8000/users/auth/logout/";
const UPDATE_URL = "http://127.0.0.1:8000/users/profile/6/";

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

const login = async (userData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.post(LOGIN_URL, userData, config);
  if (response.data) {
    console.log(response.data.user);
    const myToken = window.btoa(response.data.key);
    localStorage.setItem("token", myToken);
    // localStorage.setItem("user", JSON.stringify(response.data));
    toastSuccess("Logged In");
    // navigate("/");
  }
  return response.data;
};

// const logout = () => localStorage.removeItem("user");

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
      // setCurrentUser(false);
      // setMyKey(false);
      localStorage.clear();
      toastSuccess("User log out successfully.");
      navigate("/");
    }
  } catch (error) {
    console.log(error);
  }
};
 
//   let myKey = window.atob(localStorage.getItem("token"));
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

const update = async (user, navigate) => {
  let myKey = window.atob(localStorage.getItem("token"));
  var data = JSON.stringify({
    user,
  });
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
  // var config = {
  //   method: 'put',
  //   url: UPDATE_URL,
  //   headers: {
  //     'Authorization': `Token ${myKey}`,
  //     'Content-Type': 'application/json',
  //   },
  //   data : data
  // };

  // axios(config)
  // .then(function (response) {
  //   console.log(JSON.stringify(response.data));
  //   toastSuccess("Blog has been successfully updated")
  //   navigate('/register')
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
};

const authService = { register, login, logout, update };

export default authService;
