/* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect } from "react";
import profileDefault from "../assets/images/default.webp";
import postDefault from "../assets/images/not-found.png";
import { onImageError, onImageErrorPost } from "../helpers/functions";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { animations } from "../helpers/AnimatedPage";
import { useSelector } from "react-redux";
import { PostLoader } from "../helpers/loaders";

const PostCard = ({ data }) => {
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.blog);

  const handleDetails = (blog) => {
    navigate(`/details/${blog.slug}`, {
      state: blog,
    });
  };
  return (
    <>
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1 }}
        className="flex justify-center items-center text-white "
      >
        {isLoading ? (
          <div className="centeralizer md:mx-10 xl:mx-5  max-w-10/12">
            <PostLoader />
          </div>
        ) : (
          <div
            className="w-11/12 max-w-sm sm:max-w-md 2xl:max-w-lg container rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl dark:bg-main  transition-all duration-300 max-h-548px 2xl:max-h-max 2xl:min-h-38  md:min-w-448px overflow-hidden"
            key={data.id} 
          >
            <div className="flex justify-between items-center my-3 px-4 " >
              <h1
                title={data.title}
                onClick={() => handleDetails(data)}
                className="text-2xl 2xl:text-3xl font-bold hover:text-slate-200 cursor-pointer  transition duration-100 max-h-8 2xl:max-h-full overflow-hidden line-clamp-1"
              >
                {data.title}
              </h1>
              <span className="text-white text-xs 2xl:text-2xl font-bold rounded-lg bg-green-500 py-1.5 px-3  ">
                {data.category_name}
              </span>
            </div>
            <div className="relative">
              <img
                className="cursor-pointer min-w-full h-80 sm:h-96 min-h-full  max-h-96 2xl:max-h-30rem object-cover"
                src={data.post_image ? data.post_image : postDefault}
                onError={onImageErrorPost}
                alt=""
                onClick={() => handleDetails(data)}
              />
              {/* // ! counters */}
              <div className="flex space-x-2 justify-end absolute bottom-0 px-2 py-1 bg-black bg-opacity-40 w-full select-none">
                <div className="flex space-x-1 items-center">
                  <span>
                    <svg
                      className="fill-slate-100 dark:fill-slate-100 h-7 w-7 "
                      viewBox="0 0 576 512"
                    >
                      <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z" />
                    </svg>
                  </span>
                  <span>{data.view_count}</span>
                </div>
                <div className="flex space-x-1 items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </span>
                  <span>{data.comment_count}</span>
                </div>
                <div className="flex space-x-1 items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>{data.like_count}</span>
                </div>
              </div>
            </div>
            <div className="flex p-4 justify-between">
              <div className="flex items-center space-x-2 min-h-72px">
                <img
                  className="w-10 h-10 rounded-full border-2 border-sky-200 object-cover"
                  src={data.author_pp ? data.author_pp : profileDefault}
                  onError={onImageError}
                  alt="sara"
                />

                <div>
                  <h2 className="font-bold 2xl:text-2xl">{data.author}</h2>
                  <p className="line-clamp-2 text-justify">{data.content}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>{" "}
    </>
  );
};

export default PostCard;
