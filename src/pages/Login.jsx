import React from "react";
import { Formik } from "formik";
import { loginSchema } from "../components/formik/LoginSchema";
import LoginForm from "../components/formik/LoginForm";

const Login = () => {
  return (
    <>
      <div className="centeralizer flex-col px-6 py-8 mx-auto lg:py-0 min-h-81">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
          <Formik
            initialValues={{
              username: "jim",
              email: "",
              password: "Esad1926",
            }}
            validationSchema={loginSchema}
            component={(props) => <LoginForm {...props} />}
          ></Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
