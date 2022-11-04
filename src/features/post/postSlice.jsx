import {  createSlice } from "@reduxjs/toolkit";
// import postService from "./postService";

const initialState = {
  isLoading: false,

};


const post = createSlice({
    name: "user",
    initialState,
    reducers: {
      reset: (state) => {
        state.isLoading = false; 
      },
    }, 
    extraReducers: {
       
    },
  });
  
  export const { reset } = post.actions;
  export default post.reducer;
  