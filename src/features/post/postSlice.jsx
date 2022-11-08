import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from "./postService";
// import { toastError, toastWarn } from "../../helpers/customToastify";
const initialState = {
  isLoading: false,
  blogs: [],
  isError: false, 
};

export const blogPosts = createAsyncThunk("blog/blog", async (thunkAPI) => {
  // let res = await api.get(`blog/blog/`);
  try {
    return await postService.blogPosts();
  } catch (error) {
    // return thunkAPI.rejectWithValue(error);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

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

const post = createSlice({
  name: "post",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: {
    [blogPosts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [blogPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.blogs = action.payload;
      // console.log(action);
    },
    [blogPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true; 
    },
    [blogCreate.pending]: (state, action) => {
      state.isLoading = true;
    },
    [blogCreate.fulfilled]: (state, action) => {
      state.isLoading = false; 
      console.log(action)
    },
    [blogCreate.rejected]: (state, action) => {
      state.isLoading = false;   
    },
  },
});

export const { reset } = post.actions;
export default post.reducer;
