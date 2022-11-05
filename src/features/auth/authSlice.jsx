import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  toastError, 
  toastWarn,
} from "../../helpers/customToastify";
import authService from "./authService";

// const userStorage = JSON.parse(window.atob(localStorage.getItem("userInfo")));
const userStorage = JSON.parse(localStorage.getItem("userInfo"));
// console.log(userStorage);
const initialState = {
  authUser: userStorage ? userStorage : null, 
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const register = createAsyncThunk(
  "auth/register",
  async (registerData, thunkAPI) => {
    try {
      return await authService.register(registerData);
    } catch (error) {
      let datas = error.response.data;
      for (let i in datas) {
        if (datas[i].toString().includes("already exists")) {
          return toastError(`${i} must be unique`);
        } else if (datas[i].toString().includes("not be blank.")) {
          return toastError(
            `${i.replace(/^./, (str) =>
              str.toUpperCase()
            )} field may not be blank.`
          );
        } else {
          toastWarn("Please check your information and try again.");
        }
      }

      return thunkAPI.rejectWithValue(error.response.data);
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
      let datas = error.response.data;
      for (let i in datas) {
        console.log(datas[i]);
        if (datas[i].toString().includes("provided credentials.")) {
          return toastError(
            `Your email or password is incorrect. Please Try Again`
          );
        } else {
          return toastWarn("Please check your information and try again.");
        }
      }
      // console.log(error.response);
      return thunkAPI.rejectWithValue(error.response.data);
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
      // console.log("asdsadsa");
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
      state.user = null;
    },
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
    },
    [register.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      // state.authUser = action.payload;
      // console.log(action.payload);
    },
    [register.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.error;
      // console.log(action);

      // state.authUser = null;
    },
    [login.pending]: (state, action) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = false;
      console.log(action);
      state.authUser = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.error; 
      console.log(action);

      state.authUser = null;
    },
    [logout.pending]: (state, action) => {
      state.isLoading = true;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      // state.message = action;
      console.log(action);
      state.authUser = null;
    },
    [logout.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.error.message;
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
