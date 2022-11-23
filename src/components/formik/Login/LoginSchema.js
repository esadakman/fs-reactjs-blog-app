import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "Username should be at least 4 characters")
    .max(20, "Username should be at most 20 characters")
    .required("Please fill out user name"),
  email: Yup.string()
    .email("Please enter a valid email address") ,
    // .required("Please fill out email field"),

  password: Yup.string()
    .required("Please fill out password field")
    .min(4, "Password should be at least 8 characters"),
});
