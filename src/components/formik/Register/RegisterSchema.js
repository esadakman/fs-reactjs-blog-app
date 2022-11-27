import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username should be at least 3 characters")
    .max(20, "Username should be at most 20 characters")
    .required("Please fill out user name"),

  first_name: Yup.string()
    .min(3, "Name should be at least 3 characters")
    .max(20, "Must be at most 20 characters")
    .required("Please enter a first name"),

  last_name: Yup.string()
    .min(3, "Surname should be at least 3 characters")
    .max(20, "Must be at most 20 characters")
    .required("Please enter a last name"),

  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please fill out this field"),

  password: Yup.string()
    .min(8, "Password should be at least 8 characters")
    .max(16, "Password  should be maximum 16 characters")
    .required("Please fill out this field")
    .matches(/\d+/, "Password should contain numbers ")
    .matches(/[a-z]+/, "Password should contain letters "),

  password2: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .min(8, "Password should be at least 8 characters")
    .max(16, "Password  should be maximum 16 characters")
    .required("Please fill out this field")
    .matches(/\d+/, "Password should contain numbers ")
    .matches(/[a-z]+/, "Password should contain letters "),
});
