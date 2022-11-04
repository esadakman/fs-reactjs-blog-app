import { configureStore } from '@reduxjs/toolkit';
// import authReducer from '../features/authSlice';
import authReducer from '../features/auth/authSlice';


const store = configureStore({
    reducer: {
      user: authReducer,
    //   news: newsReducer,
    },
    // ? deploy'da devtools'u kapatmak için ⬇️
    devTools: process.env.NODE_ENV !== 'production',
  });
  export default store;