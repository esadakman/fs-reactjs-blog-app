import axios from "axios";
import { toastSuccess } from "../../helpers/customToastify"; 

const REGISTER_URL = "http://127.0.0.1:8000/users/register/"; 
// const LOGOUT_URL = "http://127.0.0.1:8000/users/auth/logout/"; 
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
  const res = await axios.post(`${API_URL}users/auth/login/`, loginData.user, config);
  if (res.data) {
    console.log(res.data);
    let id = res.data.user.id 
    const myToken = window.btoa(res.data.key);
    // const userStorage = JSON.stringify(res.data.user);
    // localStorage.setItem("userInfo", window.btoa(userStorage) );  
    localStorage.setItem("token", myToken); 
    const config = {
      headers: {
        Authorization: `Token ${res.data.key}`,
        "Content-Type": "application/json",
      },
    }; 
    var rest = await axios(`${API_URL}users/profile/${id-2}/`,config);  
    localStorage.setItem("userInfo", window.btoa(JSON.stringify(rest.data)) ); 
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
      url: `${API_URL}users/auth/logout/`,
      headers: {
        Authorization: `Token ${myKey}`,
      },
    };
    const res = await axios(config);
    console.log(res);
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
  let image = userData.image;
  let user = userData.user; 
  var data = JSON.stringify({
    image,
    user, 
  }); 
  try {
    var config = {
      method: "put",
      url: `${API_URL}users/profile/${userData.userId-2}/`,
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
      return(res.data)
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
