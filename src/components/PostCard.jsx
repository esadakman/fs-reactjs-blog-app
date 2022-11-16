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
  let url = process.env.REACT_APP_API_URL + `/blog/posts/`;
  const getPosts = async (url) => {
    try {
      setIsLoading(true);
      // const { data } = await axios.get(url, {});
      const res = await axios.get(url, {});
      setPostData(res?.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  // console.log(postData)
  useEffect(() => {
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

  const handlePagination = () => {
    getPosts(postData.next);
  };
  // console.log(paginate);
  return (
    <>
      {isLoading ? (
        <div className="w-screen min-h-82  centeralizer">
          <img className=" " src={loadingGif} alt="Loading Gif" />
        </div>
      ) : (
        <>
          <div className=" min-h-82 flex justify-center items-center text-white  gap-5 md:gap-10  flex-wrap pt-2 ">
            {postData?.results?.map((data) => (
              <div
                className=" max-w-xs lg:max-w-sm  container rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl dark:bg-main  transition-all duration-300 max-h-548px"
                key={data.id}
                onClick={() => handleDetails(data)}
              >
                <div className="flex justify-between items-center my-3 px-4 ">
                  <h1 className="text-2xl font-bold hover:text-slate-200 cursor-pointer  transition duration-100 max-h-8 overflow-hidden">
                    {data.title}
                  </h1>
                  <span className="text-white text-xs font-bold rounded-lg bg-green-500 py-1.5 px-3  ">
                    {data.category_name}
                  </span>
                </div>
                <img
                  className="min-w-full cursor-pointer h-96  "
                  src={data.post_image ? data.post_image : postDefault}
                  onError={onImageErrorPost}
                  alt=""
                />
                <div className="flex p-4 justify-between">
                  <div className="flex items-center space-x-2">
                    <img
                      className="w-10 rounded-full"
                      // src={data.author_pp || profileDefault}
                      src={data.author_pp ? data.author_pp : profileDefault}
                      onError={onImageError}
                      alt="sara"
                    />
                    <h2 className=" font-bold cursor-pointer">{data.author}</h2>
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
                      {/* <span>{data.post_comment.length}</span> */}
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
                      <span>{data.like_count}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full centeralizer pb-2">
            <button className="btn-custom" onClick={handlePagination}>
              VIEW MORE
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default PostCard;

// const { blogs, isLoading } = useSelector((state) => state.blog);
// dispatch(getPosts());

// const [isLoading, setIsLoading] = useState(false);
// const [postData, setPostData] = useState(blogs);
