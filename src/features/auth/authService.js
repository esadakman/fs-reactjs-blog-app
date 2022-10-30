import axios from "axios"; 
import { toastSuccess } from "../../helpers/customToastify";

const REGISTER_URL = "http://127.0.0.1:8000/users/register/";
const LOGIN_URL = "http://127.0.0.1:8000/users/auth/login/";
const LOGOUT_URL = "http://127.0.0.1:8000/users/auth/logout/";

// const ACTIVATE_URL = "/api/v1/auth/users/activation/";
 
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
	console.log(response.data.user)
	const myToken = window.btoa(response.data.key)
	localStorage.setItem("token", myToken)
    // localStorage.setItem("user", JSON.stringify(response.data));
    toastSuccess("Logged In");
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
        // navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };


const authService = { register, login, logout };

export default authService;
