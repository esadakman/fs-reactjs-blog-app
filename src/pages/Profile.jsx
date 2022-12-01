import { Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import profilePP from "../assets/images/default.webp";
import ProfileForm from "../components/formik/Profile/ProfileForm";
import loader from "../assets/images/loading.svg";
import { profileSchema } from "../components/formik/Profile/ProfileSchema";
import { update } from "../features/auth/authSlice";
import { motion } from "framer-motion";
import { animations } from "../helpers/AnimatedPage"; 
const Profile = () => {
  const dispatch = useDispatch();
  const { authUser, isLoading } = useSelector((state) => state.user);

  return (
    <motion.main
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="h-screen md:min-h-800px py-16 border-2 centeralizer "
    >
      {isLoading ? (
        <div className="min-h-81 centeralizer">
          <img src={loader} alt="" />
        </div>
      ) : (
        <>
          <div className="bg-slate-100 py-2.5 px-5 rounded-lg m-4 max-w-lg  w-full lg:w-1/2 shadow-xl h-fit ">
            <section className="flex">
              <img
                className="rounded-full w-20 h-20 md:h-32 md:w-32 mr-2 md:mr-5 mb-2 object-cover transition-all"
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
                  let updateData = { values, userId: authUser.user.id };
                  dispatch(update(updateData));
                  actions.setSubmitting(false);
                }}
                component={(props) => <ProfileForm {...props} />}
              ></Formik>
            </section>
          </div> 
        </>
      )}
    </motion.main>
  );
};

export default Profile;
