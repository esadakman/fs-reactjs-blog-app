import React from "react";
import { Formik } from "formik";
import { loginSchema } from "../components/formik/Login/LoginSchema";
import LoginForm from "../components/formik/Login/LoginForm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { toastWarn } from "../helpers/customToastify";
// import { loginSchema } from "../components/formik/Login/LoginSchema";
// import LoginForm from "../components/formik/Login/LoginForm";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <div className="centeralizer min-h-81 mt-16">
        <div className="w-11/12 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
          <Formik
            initialValues={{
              username: "jim",
              email: "",
              password: "",
            }}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              let loginData = { user: values, navigate: navigate };
              if ((values.username || values.email) && values.password) {
                dispatch(login(loginData));
              } else {
                toastWarn("Please fill out all fields.");
              }
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <LoginForm {...props} />}
          ></Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
