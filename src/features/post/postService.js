import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";
import {  toastSuccess } from "../../helpers/customToastify"; 

const postAPI = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  // timeout: 8000,

  baseURL: "http://127.0.0.1:8000/blog",
});

const blogPosts = async () => {
  const response = await postAPI.get("/posts/");
  // console.log(response);
  try {
    if (response.status === 200) {
      // console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const blogCreate = async ({ postData, navigate }) => {
  let myKey = window.atob(localStorage.getItem("token"));
  // console.log(postData);
  try {
    var config = {
      method: "post",
      headers: {
        Authorization: `Token ${myKey}`,
      },
      data: postData,
    };
    const response = await postAPI(`/posts/`, config);
    if (response.status === 201) {
      navigate('/')
      toastSuccess('Your post has been created succesfully !')
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const postService = { blogPosts, blogCreate };

export default postService;
