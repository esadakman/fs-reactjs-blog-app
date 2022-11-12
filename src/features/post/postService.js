import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";
import { toastSuccess } from "../../helpers/customToastify";
let myKey = window.atob(localStorage.getItem("token"));

const postAPI = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  // timeout: 8000,

  baseURL: process.env.REACT_APP_API_URL+'/blog',
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
      navigate("/");
      toastSuccess("Your post has been created succesfully !");
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const postDetail = async (postData) => { 
  try {
    var config = {
      headers: {
        Authorization: `Token ${myKey}`,
      },
    };
    const response = await postAPI(`/posts/${postData}`, config);
    if (response.status === 200) {
      // navigate('/')
      // toastSuccess('Your post has been created succesfully !')
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const postLike = async (postData) => {  
  try {
    var config = {
      method: "post",
      headers: {
        Authorization: `Token ${myKey}`,
      },
      data: postData,
    };
    const response = await postAPI(`/like/`, config);
    if (response.status === 200) {
      // navigate('/')
      // toastSuccess('Your post has been created succesfully !')
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const postComment = async ({comment, url}) => { 
  // console.log(comment);
  let data = JSON.stringify({
    "content": comment
  });
  try {
    var config = {
      method: "post",
      headers: {
        Authorization: `Token ${myKey}`,
      },
      data: data,
    };
    const response = await postAPI(url, config);
    if (response.status === 200) {
      console.log('object');
      // navigate('/')
      // toastSuccess('Your post has been created succesfully !')
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const postService = { blogPosts, blogCreate, postLike, postDetail , postComment};

export default postService;
