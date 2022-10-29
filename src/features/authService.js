import axios from "axios";


const REGISTER_URL = "http://127.0.0.1:8000/users/register/";
// const LOGIN_URL = "/api/v1/auth/jwt/create/";
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

const authService = { register,   };

export default authService;
