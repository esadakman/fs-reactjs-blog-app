import { createSlice } from "@reduxjs/toolkit";

// const url = "http://127.0.0.1:8000/";

const initialState = {
  user: false,
};

const authSlice = createSlice({
  name: "auth",
  // initialState: initialState,
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    // clearUser: (state) => {
    //   state.user = "";
    // },
  },
});

// export const {setUser,clearUser} = authSlice.actions;

export default authSlice.reducer;
