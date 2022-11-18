/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import profileDefault from "../assets/images/default.webp";
import postDefault from "../assets/images/not-found.png";
import loadingGif from "../assets/images/loading.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onImageError, onImageErrorPost } from "../helpers/functions";
import axios from "axios";
import { useState } from "react";

const PostCard = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [postData, setPostData] = useState();
  const { authUser } = useSelector((state) => state.user);

  const getPosts = async (url) => {
    try {
      setIsLoading(true);
      const res = await axios.get(url, {});

      setPostData(res.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };
  useEffect(() => {
    let url = process.env.REACT_APP_API_URL + `/blog/posts/`;
    getPosts(url);
  }, []);

  const handleDetails = (blog) => {
    if (authUser) {
      navigate(`/details/${blog.slug}`, {
        state: blog,
      });
    } else {
      console.log("You should login to see details");
      navigate("/login");
    }
  };
  const handlePaginationNext = () => {
    getPosts(postData?.next);
  };
  const handlePaginationPrevious = () => {
    getPosts(postData?.previous);
  };
  // console.log(postData);
  return (
    <>
      {isLoading ? (
        <div className="w-screen min-h-82  py-5 centeralizer ">
          <img src={loadingGif} alt="Loading Gif" />
        </div>
      ) : (
        <>
          <div className=" min-h-82 2xl:min-h-screen flex justify-center items-center text-white  gap-5 md:gap-10  flex-wrap pt-2 sm:w-full">
            {postData?.results?.map((data) => (
              <div
                className="max-w-sm 2xl:max-w-lg container rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl dark:bg-main  transition-all duration-300 max-h-548px 2xl:max-h-max 2xl:min-h-38 rem w-11/12 h-auto
                "
                key={data.id}
                onClick={() => handleDetails(data)}
              >
                <div className="flex justify-between items-center my-3 px-4 ">
                  <h1 className="text-2xl 2xl:text-3xl font-bold hover:text-slate-200 cursor-pointer  transition duration-100 max-h-8 2xl:max-h-full overflow-hidden">
                    {data.title}
                  </h1>
                  <span className="text-white text-xs 2xl:text-2xl font-bold rounded-lg bg-green-500 py-1.5 px-3  ">
                    {data.category_name}
                  </span>
                </div>
                <div className="relative">
                  <img
                    className="min-w-full w-auto cursor-pointer h-80 sm:h-96  max-h-96 2xl:max-h-30rem "
                    // className="min-w-full w-auto cursor-pointer h-80 sm:h-96 2xl:h-auto max-h-96 2xl "
                    src={data.post_image ? data.post_image : postDefault}
                    onError={onImageErrorPost}
                    alt=""
                  />
                  {/* // ! counters */}
                  <div className="flex space-x-2 justify-end absolute bottom-0 px-2 py-1 bg-black bg-opacity-40 w-full">
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
                          className="h-7 w-7 transition-all hover:text-slate-300"
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
                          className="h-7 w-7 transition-all hover:text-slate-300"
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
                  <div className="flex items-center space-x-2">
                    <img
                      className="w-10 rounded-full"
                      // src={data.author_pp || profileDefault}
                      src={data.author_pp ? data.author_pp : profileDefault}
                      onError={onImageError}
                      alt="sara"
                    />

                    <div>
                      <h2 className="font-bold 2xl:text-2xl  cursor-pointer">
                        @{data.author}
                      </h2>
                      <p className="overflow-hidden h-8">
                        {data.content.slice(0, 35)}...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      <div className="w-full centeralizer py-2">
        <div className="w-full centeralizer gap-5 p-2 ">
          {postData?.previous && (
            <button className="btn-custom" onClick={handlePaginationPrevious}>
              Previous Page
            </button>
          )}
          {postData?.next && (
            <button className="btn-custom" onClick={handlePaginationNext}>
              Next Page
            </button>
          )} 
        </div>
      </div>
    </>
  );
};

export default PostCard;
