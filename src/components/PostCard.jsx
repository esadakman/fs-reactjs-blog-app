import React from "react";
import axios from "axios";
import { useEffect } from "react" 
import { useState } from "react";
// import PostDetails from "./PostDetails";

const PostCard = ( ) => {
  const [postData, setPostData] = useState();
  const getPosts = async (str) => {
    try {
      const { data } = await axios.get(`http://127.0.0.1:8000/blog/posts/`, {});
      setPostData(data.results);
      // console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);
  // let data = postData
  console.log(postData);
  return (
    <>
      {/* <PostDetails/> */}
      <div className=" min-h-82 flex justify-center items-center text-white  gap-5 flex-wrap my-2">
        {postData?.map((data) => (
          <div className="max-w-xs  container   rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl dark:bg-slate-800  transition-all" key={data.id}>
            <div>
              <span className="text-white text-xs font-bold rounded-lg bg-green-500 inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer">
                Home
              </span>
              <h1 className="text-2xl my-2 ml-4 font-bold hover:text-slate-200 cursor-pointer  transition duration-100">
                {data.title}
              </h1>
            </div>
            <img
              className="w-full cursor-pointer"
              // src="https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              src={data.post_image}
              alt=""
            />
            <div className="flex p-4 justify-between">
              <div className="flex items-center space-x-2">
                <img
                  className="w-10 rounded-full"
                  src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
                  alt="sara"
                />
                <h2 className=" font-bold cursor-pointer">Felipe Sacudon</h2>
              </div>
              <div className="flex space-x-2">
                <div className="flex space-x-1 items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 transition-all hover:text-slate-300  cursor-pointer"
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
                  <span>{data.post_comment.length}</span>
                </div>
                <div className="flex space-x-1 items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-red-500 hover:text-red-400 transition-all cursor-pointer"
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
                  <span>20</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostCard;
