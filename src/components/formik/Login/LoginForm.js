import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LoginForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
  handleSubmit,
  isValid,
}) => {
  const { isLoading } = useSelector((state) => state.user); 
  // ! Form Validations
  return (
    <div>
      <div className="p-6 space-y-6 md:space-y-6 sm:px-8">
        <h1 className="text-xl font-bold leading-tight tracking-wide text-gray-900 md:text-2xl dark:text-white text-center ">
          Login
        </h1>
        <form
          className="flex flex-col gap-3"
          action="#"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="email"
              className="block ml-1 mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Username or Email*
            </label>
            <input
              type="text"
              name="usernameEmail"
              id="usernameEmail" 
              className={
                errors.usernameEmail && touched.usernameEmail
                  ? "login-input border-pink-500 animate-handshake"
                  : "login-input dark:focus:border-blue-500 "
              }
              placeholder="Username or Email"
              value={values.usernameEmail || ""}
              onChange={handleChange}
              onBlur={handleBlur} 
            />
            {errors.usernameEmail && touched.usernameEmail ? (
              <p className="ml-2 mt-2 text-pink-600 text-sm">
                {errors.usernameEmail}
              </p>
            ) : null}
          </div>
          {/* <div>
            <label
              htmlFor="email"
              className="block  ml-1 mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email" 
              className={
                errors.email && touched.email
                  ? "login-input border-pink-500 animate-handshake"
                  : "login-input dark:focus:border-blue-500"
              }
              placeholder="name@company.com"
              required=""
              value={values.email || ""}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="ml-2 mt-2 text-pink-600 text-sm">{errors.email}</p>
            ) : null}
          </div> */}
          <div className="m-0 p-0">
            <label
              htmlFor="password"
              className="block  ml-1 mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password*
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••" 
              className={
                errors.password && touched.password
                  ? "login-input border-pink-500 animate-handshake"
                  : "login-input dark:focus:border-blue-500 "
              }
              required=""
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="ml-2 mt-2 text-pink-600 text-sm">
                {errors.password}
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full btn-blue mt-2 mb-1"
            // disabled={!isValid}
          >
            {isLoading ? (
              <>
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline mr-3 w-4 h-4 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Loading
              </>
            ) : (
              "Login"
            )}
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-primary-600 hover:underline hover:text-white :text-white dark:text-primary-500  transition-all underline"
            >
              Sign Up Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
