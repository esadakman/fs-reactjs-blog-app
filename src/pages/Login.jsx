import React, { useEffect } from "react";
import { Formik } from "formik";
import { loginSchema } from "../components/formik/Login/LoginSchema";
import LoginForm from "../components/formik/Login/LoginForm";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import { toastWarn } from "../helpers/customToastify";
import { motion } from "framer-motion";
import { animations } from "../helpers/AnimatedPage";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.user);
  useEffect(() => {
    // authUser && navigate('/')
    if (authUser) {
      navigate("/");
    }
  }, [authUser, navigate]);

  return (
    <>
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1 }}
        className="centeralizer min-h-81 mt-16"
      >
        <div className="w-11/12 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
          <Formik
            initialValues={{
              usernameEmail: "",
              // email: "",
              password: "",
            }}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              var validRegex =
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
              let userInfo = { 
                password: values.password,
              };
              if (values.usernameEmail.match(validRegex)) {
                userInfo = { ...userInfo, email: values.usernameEmail };
              } else {
                userInfo = { ...userInfo, username: values.usernameEmail };
              }
              // console.log(userInfo) 

              let loginData = {
                user: userInfo,
                navigate: navigate,
                actions: actions,
              };
              if (values.usernameEmail && values.password) {
                dispatch(login(loginData));
              } else {
                toastWarn("Please fill out all fields.");
              }
              actions.setSubmitting(false);
            }}
            component={(props) => <LoginForm {...props} />}
          ></Formik>
        </div>
      </motion.div>
    </>
  );
};

export default Login;
