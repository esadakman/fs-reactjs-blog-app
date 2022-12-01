import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from "./postService";

// import { toastError, toastWarn } from "../../helpers/customToastify";
const initialState = {
  isLoading: false,
  isLoadingComment: false,
  isLoadingLike: false,
  blogs: [],
  blogDetail: [],
  isError: false,
};

export const getPost = createAsyncThunk("blog/posts", async (url, thunkAPI) => {
  // let res = await api.get(`blog/blog/`);
  try {
    return await postService.getPost(url);
  } catch (error) {
    // return thunkAPI.rejectWithValue(error);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const getPostDetail = createAsyncThunk(
  "blog/blog",
  async (postDetailData, thunkAPI) => {
    try {
      return await postService.getPostDetail(postDetailData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const postCreate = createAsyncThunk(
  "post/create",
  async (postCreateData, thunkAPI) => {
    try {
      return await postService.postCreate(postCreateData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const postLike = createAsyncThunk(
  "post/like",
  async (postLikeData, thunkAPI) => {
    // console.log(postLikeData);
    try {
      return await postService.postLike(postLikeData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const postComment = createAsyncThunk(
  "post/comment",
  async (postCommentData, thunkAPI) => {
    try {
      return await postService.postComment(postCommentData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const post = createSlice({
  name: "post",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: {
    [getPost.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.blogs = action.payload;
      // console.log(action);
    },
    [getPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      // console.log(action)
    },
    [getPostDetail.pending]: (state, action) => {
      state.isLoading = true;
      // console.log(state.isLoading);
    },
    [getPostDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.blogDetail = action.payload;
    },
    [getPostDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
    [postCreate.pending]: (state) => {
      state.isLoading = true;
    },
    [postCreate.fulfilled]: (state) => {
      state.isLoading = false; 
    },
    [postCreate.rejected]: (state) => {
      state.isLoading = false;
    },
    [postLike.pending]: (state) => {
      state.isLoadingLike = true;
    },
    [postLike.fulfilled]: (state, action) => {
      state.isLoadingLike = false;
      state.blogDetail = action.payload;
    },
    [postLike.rejected]: (state) => {
      state.isLoadingLike = false;
    },
    [postComment.pending]: (state, action) => {
      state.isLoadingComment = true;
    },
    [postComment.fulfilled]: (state, action) => {
      state.isLoadingComment = false;
      state.blogDetail = action.payload;
    },
    [postComment.rejected]: (state, action) => {
      state.isLoadingComment = false;
    },
  },
});

export const { reset } = post.actions;
export default post.reducer;

// export const postUpdate = createAsyncThunk(
//   "post/update",
//   async (postUpdateData, thunkAPI) => {
//     console.log(postUpdateData);
// try {
//   return await postService.postUpdate(postUpdateData);
// } catch (error) {
//   const message =
//     (error.response &&
//       error.response.data &&
//       error.response.data.message) ||
//     error.message ||
//     error.toString();
//   console.log(error);
//   return thunkAPI.rejectWithValue(message);
// }
// }
// );
