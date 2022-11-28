import moment from "moment";
import React from "react";
// import { useRef } from "react";
import { CommentLoader } from "../helpers/loaders";
import AnimatedPage from "../helpers/AnimatedPage";
import { useSelector } from "react-redux";
import { onImageError } from "../helpers/functions";
import profileDefault from "../assets/images/default.webp";

const CommentSection = () => { 
  const { blogDetail, isLoadingComment } = useSelector((state) => state.blog);  
  return (
    <>
      <div className="media flex pb-2 flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-2xl font-bold tracking-wide">
            {blogDetail?.post_comment?.length > 0
              ? "Comments"
              : "No Comment Yet . . ."}
          </p>
        </div>

        {isLoadingComment
          ? blogDetail?.post_comment?.map((data) => (
              <AnimatedPage key={data.id} className="border-b border-slate-100">
                <CommentLoader />
              </AnimatedPage>
            ))
          : blogDetail?.post_comment?.map((data) => (
              <AnimatedPage key={data.id}>
                <article
                  className="flex pb-2 border-b border-slate-100"
                  key={data.id}
                >
                  <div className=" pr-4">
                    <img
                      className="rounded-full max-w-none w-12 h-12 object-cover"
                      src={data.user_pp ? data.user_pp : profileDefault}
                      onError={onImageError}
                      alt="asd"
                    />
                  </div>
                  <div className="media-body">
                    <div>
                      <p className="inline-block text-base font-bold mr-2 ">
                        {data.user}
                      </p>
                      <span className="text-slate-500 dark:text-slate-300">
                        {moment(new Date(data.time_stamp)).fromNow()}
                      </span>
                    </div>
                    <p className="text-justify max-h-20 overflow-auto">
                      {data.content}
                    </p>
                  </div>
                </article>
              </AnimatedPage>
            ))}
      </div>
    </>
  );
};

export default CommentSection;
