import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import profilePP from "../assets/images/default.webp";
import { update } from "../features/auth/authSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.user);
  const [image, setImage] = useState(authUser?.image);
  const [formData, setFormData] = useState({
    username: authUser?.user.username,
    email: authUser?.user.email,
    first_name: authUser?.user.first_name,
    last_name: authUser?.user.last_name,
  });
  console.log(authUser);
  // btoa(window.localStorage.getItem('image')
  let local = window.atob(((localStorage.getItem("userInfo"))))
  // console.log(JSON.parse(local)); 

  // console.log(window.atob(localStorage.getItem("token")));
  // ? handleChange
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    let updateData = { user: formData, image: image, userId: authUser.user.id };
    dispatch(update(updateData));
  };
  return (
    <main className="flex justify-center  p-1 ">
      <div className="bg-slate-100 py-2.5 px-5 rounded-lg m-4 max-w-lg  w-full lg:w-1/2 shadow-xl">
        <section className="media flex">
          <img
            className="rounded-full h-32 w-32 mr-5 mb-4"
            src={authUser?.image || profilePP}
            alt="pp"
          />
          <div className="block">
            <h2 className="text-4xl m-0 text-slate-700">
              {authUser?.user.username}
            </h2>
            <p className="text-md mb-4 text-gray-700">{authUser?.user.email}</p>
          </div>
        </section>
        <section className="">
          <form onSubmit={handleUpdate}>
            <div>
              <label htmlFor="username" className="block my-1">
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
            <div>
              <label htmlFor="Image" className="block my-1">
                Image
              </label>
              <input
                type="text"
                name="last_name"
                id="Image"
                className="profile-input"
                placeholder="Image Url"
                required=""
                value={image || ""}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            {/* <div className="flex flex-col ">
              <label htmlFor="formFile" className="form-label my-1">
                Profile Picture
              </label>
              <input
                type="file"
                name="image"
                accept="image/*"
                id="formFile"
                // onChange={(e) => setImage(e.target.value)}
                value={image || ""}
                onChange={(e) => setImage(e.target.value)}
                className="form-control block w-full text-sm text-slate-900
                file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0
                file:text-sm file:font-medium file:bg-slate-400 file:text-main
                hover:file:bg-slate-600  hover:file:text-violet-50 file:transition-all file:cursor-pointer cursor-pointer"
              />
            </div> */}
            <button
              type="submit"
              className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-primary-800 transition-all mt-3"
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
