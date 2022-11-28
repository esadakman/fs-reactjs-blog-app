import axios from "axios";
import { toastSuccess } from "../../helpers/customToastify";
export const postAPI = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 8000,

  baseURL: process.env.REACT_APP_API_URL + "/blog",
});

const getPost = async (url) => {
  // console.log(url)
  try {
    const response = await postAPI.get(url);
    if (response.status === 200) {
      // console.log(response.data);
      return response.data;
    }
  } catch (error) {
    throw Error(error);
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
    throw Error(error);
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
    throw Error(error);
  }
};

const postLike = async ({ formData, detailURL }) => {
  let myKey = window.atob(localStorage.getItem("token"));
  let data = JSON.stringify(formData);
  try {
    var config = {
      method: "post",
      headers: {
        Authorization: "Token " + myKey,
      },
      data: data,
    };
    let response = await postAPI(`/like/`, config);
    // console.log(response)
    if (response.status === 201) {
      const config = {
        headers: {
          Authorization: `Token ${myKey}`,
        },
      };
      const response = await postAPI.get(detailURL, config);
      if (response.status === 200) {
        return response.data;
      }
    }
  } catch (error) {
    throw Error(error);
  }
};

const postComment = async ({  comment, detailURL }) => {
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
    const response = await postAPI(`${detailURL}/comments/`, config);
    if (response.status === 201) {
      const config = {
        headers: {
          Authorization: `Token ${myKey}`,
        },
      };
      const response = await postAPI.get(detailURL, config);
      if (response.status === 200) { 
        toastSuccess("Your comment has been created succesfully !");
        return response.data;
      }
    }
  } catch (error) {
    throw Error(error);
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
