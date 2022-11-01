import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const userStorage = JSON.parse(window.atob(localStorage.getItem("userInfo"))); 
const initialState = {
  authUser: userStorage ? userStorage : null,
  // authUser: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
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

export const login = createAsyncThunk(
  "auth/login",
  async (loginData, thunkAPI) => {
    // console.log(loginData, 'slice');
    try {
      return await authService.login(loginData);
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

export const logout = createAsyncThunk("auth/logout", async (navigate) => {
  authService.logout(navigate);
});

export const update = createAsyncThunk(
  "auth/update",
  async (updateData, thunkAPI) => {
    // console.log(updateData);
    try {
      return await authService.update(updateData);
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

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // reset: (state) => {
    //   state.isLoading = false;
    //   state.isError = false;
    //   state.isSuccess = false;
    //   state.message = "";
    // },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(register.pending, (state) => {
  //       state.isLoading = true;
  //       console.log(state);
  //     })
  //     .addCase(register.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.isSuccess = true;
  //       state.authUser = action.payload;
  //     })
  //     .addCase(register.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.isError = true;
  //       state.message = action.error;
  //       state.authUser = null;
  //     })
  //     .addCase(login.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(login.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.isSuccess = true;
  //       state.message = false;
  //       // console.log(action);
  //       state.authUser = action.payload;
  //     })
  //     .addCase(login.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.isError = true;
  //       state.message = action.error;
  //       state.authUser = null;
  //     })
  //     .addCase(logout.fulfilled, (state) => {
  //       state.authUser = null;
  //     })
  //     .addCase(update.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(update.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.isSuccess = true;
  //       // console.log(action.payload);
  //       state.authUser = action.payload;
  //     })
  //     .addCase(update.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.isError = true;
  //       state.message = action.error;
  //       // state.user = null;
  //     });
  // },

  extraReducers: {
    [register.pending]: (state, action) => {
      state.isLoading = true;
      console.log(state);
    },
    [register.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.authUser = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.error;
      // state.authUser = null;
    },
    [login.pending]: (state, action) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = false;
      // console.log(action);
      state.authUser = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.error;
      // state.authUser = null;
    },
    [update.pending]: (state, action) => {
      state.isLoading = true;
    },
    [update.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      // console.log(action.payload);
      state.authUser = action.payload;
    },
    [update.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.error;
      // state.user = null;
    },
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
