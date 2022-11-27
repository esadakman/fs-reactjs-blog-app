import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/formik/Register/RegisterForm";
import { registerSchema } from "../components/formik/Register/RegisterSchema";
import { register } from "../features/auth/authSlice";
import { toastWarn } from "../helpers/customToastify";
import { motion } from "framer-motion";
import { animations } from "../helpers/AnimatedPage";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1 }}
        className="centeralizer flex-col py-20 "
      >
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          {/* //! FORMİK============== */}
          <Formik
            initialValues={{
              username: "",
              first_name: "",
              last_name: "",
              email: "",
              password: "",
              password2: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              if (
                values.username &&
                values.first_name &&
                values.last_name &&
                values.email &&
                values.password &&
                values.password
              ) {
                let registerData = { userData: values, navigate: navigate, actions:actions };
                dispatch(register(registerData));
              } else {
                toastWarn("Please fill out all fields");
              } 
              actions.setSubmitting(false);
            }}
            component={(props) => <RegisterForm {...props} />}
          ></Formik>
          {/* //! FORMİK============== */}
        </div>
      </motion.div>
    </>
  );
};

export default Register;
