import { Formik } from "formik";
import React from "react";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import profilePP from "../assets/images/default.webp";
import ProfileForm from "../components/formik/Profile/ProfileForm";
import { profileSchema } from "../components/formik/Profile/ProfileSchema";
import { update } from "../features/auth/authSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.user);
  // const [image, setImage] = useState(authUser?.image);
  // const [formData, setFormData] = useState({
  //   username: authUser?.user.username,
  //   email: authUser?.user.email,
  //   first_name: authUser?.user.first_name,
  //   last_name: authUser?.user.last_name,
  // });
  // ? handleChange
  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  // const handleUpdate = (e) => {
  //   e.preventDefault();
  //   let updateData = {
  //     user: formData,
  //     image: image.replace(/\s/g, ""),
  //     userId: authUser.user.id,
  //   };
  //   dispatch(update(updateData));
  // };

  return (
    <main className="flex justify-center p-1 h-full pb-16">
      <div className="bg-slate-100 py-2.5 px-5 rounded-lg m-4 max-w-lg  w-full lg:w-1/2 shadow-xl">
        <section className="flex">
          <img
            className="rounded-full w-20 h-20  md:h-32  md:w-32 mr-2  md:mr-5 mb-4"
            src={authUser?.image || profilePP}
            alt="pp"
          />
          <div className="flex flex-col overflow-hidden">
            <h2 className="text-2xl md:text-4xl m-0 text-slate-700">
              {authUser?.user.username}
            </h2>
            <div className="text-sm md:text-md mb-4 text-gray-700 w-57 overflow-auto">
              {authUser?.user.email}
            </div>
          </div>
        </section>
        <section className="">
          <Formik
            initialValues={{
              user: {
                username: authUser?.user.username,
                email: authUser?.user.email,
                first_name: authUser?.user.first_name,
                last_name: authUser?.user.last_name,
              },
              image: authUser?.image,
            }}
            validationSchema={profileSchema}
            onSubmit={(values, actions) => {
              // console.log(values);
              let updateData = { values, userId: authUser.user.id };
              dispatch(update(updateData));
              // if (
              //   values.username &&
              //   values.first_name &&
              //   values.last_name &&
              //   values.email &&
              //   values.password &&
              //   values.password
              // ) {
              // let updateData = { user: formData, image: image.replace(/\s/g, ''), userId: authUser.user.id };
              // dispatch(update(updateData));
              // } else {
              //   toastWarn("Please fill out all fields");
              // // }
              actions.setSubmitting(false);
            }}
            component={(props) => <ProfileForm {...props} />}
          ></Formik>
        </section>
      </div>
    </main>
  );
};

export default Profile;

// <div>
//           <label htmlFor="image" className="block my-1 text-sm font-medium  ">
//             Avatar
//           </label>
//           <input
//             name="image"
//             className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
//             type="file"
//             aria-describedby="file_input_help"
//             id="file_input"
//             onChange={avatarHandle}
//           />
//           <p
//             className="mt-1 text-sm text-gray-500 dark:text-gray-300"
//             id="file_input_help"
//           >
//             SVG, PNG, JPG or GIF (MAX. 800x400px).
//           </p>
//         </div>
// const avatarHandle = (e) => {
// e.preventDefault();
// const file = e.target.files[0];
// setAvatar(file);
// const reader = new FileReader();
// reader.addEventListener("load", function () {
//   setAvatar(this.result);
// });
// reader.readAsDataURL(file);
// };
// console.log(avatar);
