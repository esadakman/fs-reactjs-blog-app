import axios from "axios";
import { toastSuccess } from "../../helpers/customToastify"; 
const postAPI = axios.create({
  headers: {
    "Content-Type": "application/json",
  }, 

  baseURL: process.env.REACT_APP_API_URL + "/blog",
});

const blogPosts = async () => {
  const response = await postAPI.get("/posts/"); 
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
  let myKey = window.atob(localStorage.getItem("token"));
  try {
    var config = {
      headers: {
        Authorization: `Token ${myKey}`,
      },
    };
    const response = await postAPI(`/posts/${postData}`, config);
    if (response.status === 200) {
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
  blogPosts,
  blogCreate,
  postLike,
  postDetail,
  postComment,
};

export default postService;
