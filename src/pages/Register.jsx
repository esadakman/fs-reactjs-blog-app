import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../features/authSlice";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { username, first_name, last_name, email, password, password2 } =
    formData;
  // const { user, isLoading, isError, isSuccess, message } = useSelector(
  //   (state) => state.user
  // );
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(formData);
    dispatch(
      register(formData)
    );
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900 ">
        <div
          className="flex flex-col items-center justify-center px-6 py-8 mx-auto   lg:py-0"
          style={{ height: "91vh" }}
        >
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white ">
                Create and account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleRegister}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block   mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    User Name
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0 transition-all"
                    placeholder="User Name"
                    required=""
                    value={username}
                    onChange={onChange}
                  />
                </div>
                <div className="flex">
                  <div className="w-1/2">
                    <label
                      htmlFor="Name"
                      className="block   mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="Name"
                      name="first_name"
                      id="Name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                      block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                      focus:ring-primary-600 focus:border-primary-600 
                      dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0 transition-all
                      "
                      placeholder="Name"
                      required=""
                      value={first_name}
                      onChange={onChange}
                    />
                  </div>
                  <div className="w-1/2">
                    <label
                      htmlFor="Surname"
                      className="block  mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Surname
                    </label>
                    <input
                      type="Surname"
                      name="last_name"
                      id="Surname"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0 transition-all"
                      placeholder="Surname"
                      required=""
                      value={last_name}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block   mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0 transition-all"
                    placeholder="name@company.com"
                    required=""
                    value={email}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block   mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0 transition-all"
                    required=""
                    value={password}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block   mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="password2"
                    id="password2"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0 transition-all"
                    required=""
                    value={password2}
                    onChange={onChange}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-primary-800 "
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
