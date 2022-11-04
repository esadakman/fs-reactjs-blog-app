import axios from "axios";

const postAPI = axios.create({
    headers: {
      "Content-Type": "application/json",
    },
    // timeout: 8000,
  
    baseURL: "http://127.0.0.1:8000/blog",
  });

const postService = {};

export default postService;
