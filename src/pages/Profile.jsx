import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import profilePP from "../assets/images/default.webp";
import { update } from "../features/auth/authSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
//   console.log(user);
  const [formData, setFormData] = useState({
    username: user?.username,
    email: user?.email,
    first_name: user?.first_name,
    last_name: user?.last_name,
    // image: "",
  });
//   console.log(formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(update(formData, navigate));
    // console.log(formData, isLoading);
  };
  return (
    <main className="flex justify-center  p-1 ">
      <div className="bg-slate-100 py-2.5 px-5 rounded-lg m-4 max-w-xl grid-cols-6  shadow-xl">
        <section className="media flex">
          <img
            className="rounded-full h-32 w-32 mr-5 mb-4"
            src={profilePP}
            alt="pp"
          />
          <div className="block">
            <h2 className="text-4xl m-0 text-slate-700">{user?.username}</h2>
            <p className="text-md mb-4 text-gray-700">{user?.email}</p>
          </div>
        </section>
        <section className="">
          <form onSubmit={handleUpdate}>
            <div>
              <label htmlFor="email" className="block my-1">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="profile-input"
                placeholder="User Name"
                required=""
                value={formData.username || ""}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block my-1">
                E-mail
              </label>
              <input
                type="text"
                name="email"
                id="username"
                className="profile-input"
                placeholder="name@company.com"
                required=""
                value={formData.email || ""}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="Name" className="block my-1">
                Name
              </label>
              <input
                type="Name"
                name="first_name"
                id="Name"
                className="profile-input"
                placeholder="Name"
                required=""
                value={formData.first_name || ""}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="Surname" className="block my-1">
                Surname
              </label>
              <input
                type="Surname"
                name="last_name"
                id="Surname"
                className="profile-input"
                placeholder="Surname"
                required=""
                value={formData.last_name || ""}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="formFile" className="form-label my-1">
                Profile Picture
              </label>
              <input
                type="file"
                name="image"
                accept="image/*"
                id="formFile"
                // onChange={handleChange}
                className="form-control block w-full text-sm text-slate-900
                file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0
                file:text-sm file:font-medium file:bg-slate-400 file:text-main
                hover:file:bg-slate-600  hover:file:text-violet-50 file:transition-all file:cursor-pointer cursor-pointer"
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-primary-800 transition-all my-1"
              // onClick={handleLogin()}
            >
              Update
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Profile;
