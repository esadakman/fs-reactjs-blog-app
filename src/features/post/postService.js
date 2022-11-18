import axios from "axios";
import { toastSuccess } from "../../helpers/customToastify";
export const postAPI = axios.create({
  headers: {
    "Content-Type": "application/json",
  },

  baseURL: process.env.REACT_APP_API_URL + "/blog",
});

const getPost = async () => { 
  try {
    const response = await postAPI.get("/posts/");
    if (response.status === 200) {
      // console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const getPostDetail = async ({ detailURL, myKey }) => {
  try {
    const config = {
      headers: {
        Authorization: `Token ${myKey}`,
      },
    };
    const response = await postAPI.get(detailURL, config);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const blogCreate = async ({ postData, navigate }) => {
  let myKey = window.atob(localStorage.getItem("token"));
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

const postLike = async (postData) => {
  let myKey = window.atob(localStorage.getItem("token"));
  try {
    var config = {
      method: "post",
      headers: {
        Authorization: "Token " + myKey,
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

const postComment = async ({ comment, url }) => {
  let myKey = window.atob(localStorage.getItem("token"));
  let data = JSON.stringify({
    content: comment,
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
    if (response.status === 201) {
      // navigate('/')
      toastSuccess("Your comment has been created succesfully !");
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const postService = {
  getPost,
  getPostDetail,
  blogCreate,
  postLike,
  postComment,
};

export default postService;
