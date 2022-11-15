import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from "./postService";
// import { toastError, toastWarn } from "../../helpers/customToastify";
const initialState = {
  isLoading: false,
  blogs: [],
  blogDetail: [],
  isError: false,
};

export const getPosts = createAsyncThunk("blog/blog", async (thunkAPI) => {
  // let res = await api.get(`blog/blog/`);
  try {
    return await postService.getPosts();
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

export const blogCreate = createAsyncThunk(
  "post/create",
  async (postCreateData, thunkAPI) => {
    // console.log(postCreateData);
    try {
      return await postService.blogCreate(postCreateData);
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

const post = createSlice({
  name: "post",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.blogs = action.payload.results;
    },
    [getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
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
    [blogCreate.pending]: (state, action) => {
      state.isLoading = true;
    },
    [blogCreate.fulfilled]: (state, action) => {
      state.isLoading = false;
      // console.log(action)
    },
    [blogCreate.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [postLike.pending]: (state, action) => {
      state.isLoading = true;
    },
    [postLike.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [postLike.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [postComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [postComment.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [postComment.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { reset } = post.actions;
export default post.reducer;
