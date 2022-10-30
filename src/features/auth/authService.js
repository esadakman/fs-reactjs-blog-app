import axios from "axios";
import { toastSuccess } from "../../helpers/customToastify";


const REGISTER_URL = "http://127.0.0.1:8000/users/register/";
const LOGIN_URL = "http://127.0.0.1:8000/users/auth/login/";
// const ACTIVATE_URL = "/api/v1/auth/users/activation/";

// Register user
const register = async (userData) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	const response = await axios.post(REGISTER_URL, userData, config);
	console.log(response)
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
		localStorage.setItem("user", JSON.stringify(response.data));
		toastSuccess('Logged In')
		
	}
	return response.data;
};

const authService = { register, login  };

export default authService;
