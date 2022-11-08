import { configureStore } from '@reduxjs/toolkit'; 
import authReducer from '../features/auth/authSlice';
import postReducer from '../features/post/postSlice';


const store = configureStore({
    reducer: {
      user: authReducer,
      blog: postReducer,
    },
    // ? deploy'da devtools'u kapatmak için ⬇️
    devTools: process.env.NODE_ENV !== 'production',
  });
  export default store;