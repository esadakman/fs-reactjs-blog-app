import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" />
      <AppRouter/>
    </>
  );
};

export default App;
