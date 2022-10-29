import { configureStore } from '@reduxjs/toolkit';
// import authReducer from '../features/authSlice';
import userReducer from '../features/authSlice';


const store = configureStore({
    reducer: {
      user: userReducer,
    //   news: newsReducer,
    },
    // ? deploy'da devtools'u kapatmak için ⬇️
    devTools: process.env.NODE_ENV !== 'production',
  });
  export default store;