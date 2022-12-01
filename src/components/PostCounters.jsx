import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postLike } from "../features/post/postSlice";

const PostCounters = ({ data }) => {
  const { detailData, formData } = data; 
  const dispatch = useDispatch();
  const { blogDetail, isLoadingLike } = useSelector((state) => state.blog);
  // console.log(isLoadingLike);
  const likeData = {
    formData,
    detailURL: detailData.detailURL,
  };
  const handleLike = (e) => {
    e.preventDefault();
    dispatch(postLike(likeData));
  };

  return (
    <>
      <div className=" flex  items-center justify-end mb-4 sm:mb-0 my-2 md:my-0 select-none ">
        <div className="flex  mr-2 w-12">
          <button
            onClick={handleLike}
            disabled={isLoadingLike}
            className="mr-2 cursor-pointer disabled:cursor-wait "
          >
            <svg
              className="fill-rose-600 dark:fill-rose-400 w-6 h-6 hover:dark:fill-rose-500 transition-all duration-300"
              viewBox="0 0 24 24"
            >
              <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
            </svg>
          </button>
          <span className="text-lg font-bold">{blogDetail?.like_count}</span>
        </div>
        <div className="flex mr-2">
          <span className="mr-2">
            <svg
              className="fill-slate-100 dark:fill-slate-100 w-6 h-6 "
              viewBox="0 0 576 512"
            >
              <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z" />
            </svg>
          </span>
          <span className="text-lg font-bold">{blogDetail?.view_count}</span>
        </div>
        <div className="flex">
          <span className="mr-2">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
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
          <span className="text-lg font-bold">
            {blogDetail?.post_comment?.length}
          </span>
        </div>
      </div>
    </>
  );
};

export default PostCounters;
