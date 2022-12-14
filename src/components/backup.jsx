// {/* <>
//           {isLoading ? (
//             <div className="centeralizer min-h-screen">
//               <img src={loading} alt="loader" />
//             </div>
//           ) : (
//             <div className="wrapper pt-5 centeralizer ">
//               <article className="mb-4 break-inside p-6 pt-2 rounded-xl bg-white dark:bg-main dark:text-white flex flex-col bg-clip-border w-11/12 md:w-200">
//                 <h2 className="text-center text-2xl sm:text-5xl mt-0">
//                   ──── Details ────
//                 </h2>
//                 <>
//                   <div className="my-2   border-2 rounded-md border-slate-500">
//                     <img
//                       className="max-w-full rounded-lg w-screen max-h-548px bg-cover object-cover"
//                       src={
//                         blogDetail?.post_image
//                           ? blogDetail?.post_image
//                           : postDefault
//                       }
//                       onError={onImageErrorPost}
//                       alt="post pic"
//                     />
//                   </div>
//                   <div className="centeralizer flex-col py-2">
//                     <h2 className="text-3xl font-extrabold text-center whitespace-pre-line">
//                       {blogDetail?.title}
//                     </h2>
//                     <p className="text-slate-500 dark:text-slate-300 text-center">
//                       {moment(new Date(blogDetail.date_posted)).format(
//                         "DD MMM YYYY"
//                       )}
//                     </p>
//                   </div>
//                   <p className="text-justify max-h-56 overflow-auto bg-slate-700 p-2 rounded-md ">
//                     {blogDetail?.content}
//                   </p>
//                   <article className="mb-4">
//                     <div className="flex justify-between mt-4  flex-col md:flex-row">
//                       <div className="  items-center justify-between">
//                         <div className="flex">
//                           <img
//                             className="rounded-full max-w-none w-14 h-14 mr-3 object-cover"
//                             src={
//                               blogDetail?.author_pp
//                                 ? blogDetail?.author_pp
//                                 : profileDefault
//                             }
//                             onError={onImageError}
//                             alt="asd"
//                           />
//                           <div className="flex flex-col">
//                             <div className="flex items-center flex-col">
//                               <p className="inline-block text-lg font-bold mr-2 ">
//                                 {blogDetail?.author}
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className=" flex  items-center  justify-end my-2 md:my-0 select-none">
//                         <div className="flex  mr-2 w-12">
//                           <span className="mr-2 cursor-pointer">
//                             <svg
//                               onClick={handleLike}
//                               className="fill-rose-600 dark:fill-rose-400 w-6 h-6 "
//                               viewBox="0 0 24 24"
//                             >
//                               <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
//                             </svg>
//                           </span>
//                           <span className="text-lg font-bold">
//                             {isLoading ? null : blogDetail?.like_count}
//                           </span>
//                         </div>
//                         <div className="flex mr-2">
//                           <span className="mr-2">
//                             <svg
//                               className="fill-slate-100 dark:fill-slate-100 w-6 h-6 "
//                               viewBox="0 0 576 512"
//                             >
//                               <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z" />
//                             </svg>
//                           </span>
//                           <span className="text-lg font-bold">
//                             {blogDetail?.view_count}
//                           </span>
//                         </div>
//                         <div className="flex">
//                           <span className="mr-2">
//                             <svg
//                               className="w-6 h-6"
//                               viewBox="0 0 24 24"
//                               fill="none"
//                               stroke="currentColor"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//                               />
//                             </svg>
//                           </span>
//                           <span className="text-lg font-bold">
//                             {blogDetail?.post_comment?.length}
//                           </span>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="flex gap-4 justify-end">
//                       <DeleteModal blogDetail={blogDetail} />
//                       <EditModal blogDetails={{ blogDetail, detailData }} />
//                     </div>

//                   </article>
//                   <form className="relative" onSubmit={handleComment}>
//                     <input
//                       className="py-2 pl-3 w-full h-11 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium pr-20"
//                       type="text"
//                       ref={commentRef}
//                       required
//                       placeholder="Write a comment"
//                     />
//                     <button className="flex absolute right-3 top-2/4 -mt-3 items-center">
//                       <svg
//                         className="fill-blue-500 dark:fill-slate-300 w-6 h-6 hover:fill-slate-50  transition-all duration-300"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"></path>
//                       </svg>
//                     </button>
//                   </form>
//                   <div className="pt-6">
//                     <div className="media flex pb-2 flex-col gap-2">
//                       <div className="flex justify-between">
//                         <p className="text-2xl font-bold tracking-wide">
//                           {blogDetail?.post_comment?.length > 0
//                             ? "Comments"
//                             : "No Comment Yet . . ."}
//                         </p>
//                       </div>
//                       {isLoading && isLoadingComment
//                         ? blogDetail?.post_comment?.map((data) => (
//                             <AnimatedPage
//                               className="border-b border-slate-100"
//                               key={data.id}
//                             >
//                               <CommentLoader />
//                             </AnimatedPage>
//                           ))
//                         : blogDetail?.post_comment?.map((comments) => (
//                             <AnimatedPage key={comments.id}>
//                               <article
//                                 className="flex pb-2 border-b border-slate-100"
//                                 key={comments.id}
//                               >
//                                 <div className=" pr-4">
//                                   <img
//                                     className="rounded-full max-w-none w-12 h-12 object-cover"
//                                     src={
//                                       comments.user_pp
//                                         ? comments.user_pp
//                                         : profileDefault
//                                     }
//                                     onError={onImageError}
//                                     alt="asd"
//                                   />
//                                 </div>
//                                 <div className="media-body">
//                                   <div>
//                                     <p className="inline-block text-base font-bold mr-2 ">
//                                       {comments.user}
//                                     </p>
//                                     <span className="text-slate-500 dark:text-slate-300">
//                                       {moment(
//                                         new Date(comments.time_stamp)
//                                       ).fromNow()}
//                                     </span>
//                                   </div>
//                                   <p className="text-justify max-h-20 overflow-auto">
//                                     {comments.content}
//                                   </p>
//                                 </div>
//                               </article>
//                             </AnimatedPage>
//                           ))}
//                     </div>
//                   </div>
//                 </>
//               </article>
//             </div>
//           )}

//           <div className="w-full centeralizer pb-3">
//             <button className="btn-custom" onClick={() => navigate(-1)}>
//               Go Back
//             </button>
//           </div>
//         </> */}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//  {/* {blogDetail?.post_comment?.map((data) =>
//   isLoading && isLoadingComment ? (
//     <AnimatedPage
//       key={data.id}
//       className="border-b border-slate-100"
//     >
//       <CommentLoader />
//     </AnimatedPage>
//   ) : (
//     <AnimatedPage key={data.id}>
//       <article
//         className="flex pb-2 border-b border-slate-100"
//         key={data.id}
//       >
//         <div className=" pr-4">
//           <img
//             className="rounded-full max-w-none w-12 h-12  "
//             src={
//               data.user_pp ? data.user_pp : profileDefault
//             }
//             onError={onImageError}
//             alt="asd"
//           />
//         </div>
//         <div className="media-body">
//           <div>
//             <p className="inline-block text-base font-bold mr-2 ">
//               {data.user}
//             </p>
//             <span className="text-slate-500 dark:text-slate-300">
//               {moment(new Date(data.time_stamp)).fromNow()}
//             </span>
//           </div>
//           <p className="text-justify max-h-20 overflow-auto">
//             {data.content}
//           </p>
//         </div>
//       </article>
//     </AnimatedPage>
//   )
// )} */}
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getPostDetail,
  postComment,
  postLike,
} from "../features/post/postSlice";
import profileDefault from "../assets/images/default.webp";
import postDefault from "../assets/images/not-found.png";
import loader from "../assets/images/loading.svg";
import { useRef } from "react";
import { onImageError, onImageErrorPost } from "../helpers/functions";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
import moment from "moment";
import { CommentLoader } from "../helpers/loaders";
import AnimatedPage from "../helpers/AnimatedPage";
import { motion } from "framer-motion";
import { animations } from "../helpers/AnimatedPage";
import { postAPI } from "../features/post/postService";
const PostDetails = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.user);
  const { blogDetail, isLoadingComment, isLoading } = useSelector(
    (state) => state.blog
  );
  const navigate = useNavigate();
  const commentRef = useRef();
  let myKey = window.atob(localStorage.getItem("token"));
  const formData = {
    user_id: authUser?.user.id,
    post: state?.id,
  };
  const detailData = {
    detailURL: `/posts/${state?.slug}/`,
    myKey: myKey,
  };
  const handleLike = (e) => {
    e.preventDefault();
    dispatch(postLike(formData));
    // dispatch(getPostDetail(detailData));
    getPosts();
  };

  const handleComment = (e) => {
    e.preventDefault();
    let commentData = {
      comment: commentRef.current.value,
      url: `/posts/${state.slug}/comments/`,
      dispatch,
    };
    dispatch(postComment(commentData));
    commentRef.current.value = "";
    // dispatch(getPostDetail(detailData));
  };
  useEffect(() => {
    // dispatch(getPostDetail(detailData));
    // commentRef.current.focus();
    getPosts();
    if (!state) {
      navigate("/notfound");
    }
  }, [dispatch, navigate, state]);
  const [postDetail, setPostDetail] = useState();
  const [loading, setLoading] = useState(false);
  const getPosts = async (str) => {
    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Token ${myKey}`,
        },
      };
      const { data } = await postAPI.get(`/posts/${state?.slug}/`, config);
      // console.log(data);
      setPostDetail(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  console.log(postDetail, loading);
  return (
    <>
      {loading ? (
        <div className="centeralizer min-h-1300px">
          <img src={loader} alt="loader" />
        </div>
      ) : (
        <div className="wrapper pt-5 centeralizer ">
          <article className="mb-4 break-inside p-6 pt-2 rounded-xl bg-white dark:bg-main dark:text-white flex flex-col bg-clip-border w-11/12 md:w-200">
            <h2 className="text-center text-2xl sm:text-5xl mt-0">
              ──── Details ────
            </h2>
            <>
              <div className="my-2   border-2 rounded-md border-slate-500">
                <img
                  className="max-w-full rounded-lg w-screen max-h-548px bg-cover object-cover"
                  src={
                    postDetail?.post_image
                      ? postDetail?.post_image
                      : postDefault
                  }
                  onError={onImageErrorPost}
                  alt="post pic"
                />
              </div>
              <div className="centeralizer flex-col py-2">
                <h2 className="text-3xl font-extrabold text-center whitespace-pre-line">
                  {postDetail?.title}
                </h2>
                <p className="text-slate-500 dark:text-slate-300 text-center">
                  {moment(new Date(blogDetail.date_posted)).format(
                    "DD MMM YYYY"
                  )}
                </p>
              </div>
              <p className="text-justify max-h-56 overflow-auto bg-slate-700 p-2 rounded-md ">
                {postDetail?.content}
              </p>
              <article className="mb-4">
                <div className="flex justify-between mt-4  flex-col md:flex-row">
                  <div className="  items-center justify-between">
                    <div className="flex">
                      <img
                        className="rounded-full max-w-none w-14 h-14 mr-3 object-cover"
                        src={
                          postDetail?.author_pp
                            ? postDetail?.author_pp
                            : profileDefault
                        }
                        onError={onImageError}
                        alt="asd"
                      />
                      <div className="flex flex-col">
                        <div className="flex items-center flex-col">
                          <p className="inline-block text-lg font-bold mr-2 ">
                            {postDetail?.author}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" flex  items-center  justify-end my-2 md:my-0 select-none">
                    <div className="flex  mr-2 w-12">
                      <span className="mr-2 cursor-pointer">
                        <svg
                          onClick={handleLike}
                          className="fill-rose-600 dark:fill-rose-400 w-6 h-6 "
                          viewBox="0 0 24 24"
                        >
                          <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
                        </svg>
                      </span>
                      <span className="text-lg font-bold">
                        {postDetail?.like_count}
                      </span>
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
                      <span className="text-lg font-bold">
                        {postDetail?.view_count}
                      </span>
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
                        {postDetail?.post_comment?.length}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 justify-end">
                  <DeleteModal blogDetail={blogDetail} />
                  <EditModal blogDetails={{ blogDetail, detailData }} />
                </div>
              </article>
              <form className="relative" onSubmit={handleComment}>
                <input
                  className="py-2 pl-3 w-full h-11 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium pr-20"
                  type="text"
                  ref={commentRef}
                  required
                  placeholder="Write a comment"
                />
                <button className="flex absolute right-3 top-2/4 -mt-3 items-center">
                  <svg
                    className="fill-blue-500 dark:fill-slate-300 w-6 h-6 hover:fill-slate-50  transition-all duration-300"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"></path>
                  </svg>
                </button>
              </form>
              <div className="pt-6">
                <div className="media flex pb-2 flex-col gap-2">
                  <div className="flex justify-between">
                    <p className="text-2xl font-bold tracking-wide">
                      {postDetail?.post_comment?.length > 0
                        ? "Comments"
                        : "No Comment Yet . . ."}
                    </p>
                  </div>
                  {/* {isLoading && isLoadingComment
                    ? postDetail?.post_comment?.map((data) => (
                        <AnimatedPage
                          className="border-b border-slate-100"
                          key={data.id}
                        >
                          <CommentLoader />
                        </AnimatedPage>
                      ))
                    :  */}
                  {postDetail?.post_comment?.map((comments) => (
                    <AnimatedPage key={comments.id}>
                      <article
                        className="flex pb-2 border-b border-slate-100"
                        key={comments.id}
                      >
                        <div className=" pr-4">
                          <img
                            className="rounded-full max-w-none w-12 h-12 object-cover"
                            src={
                              comments.user_pp
                                ? comments.user_pp
                                : profileDefault
                            }
                            onError={onImageError}
                            alt="asd"
                          />
                        </div>
                        <div className="media-body">
                          <div>
                            <p className="inline-block text-base font-bold mr-2 ">
                              {comments.user}
                            </p>
                            <span className="text-slate-500 dark:text-slate-300">
                              {moment(new Date(comments.time_stamp)).fromNow()}
                            </span>
                          </div>
                          <p className="text-justify max-h-20 overflow-auto">
                            {comments.content}
                          </p>
                        </div>
                      </article>
                    </AnimatedPage>
                  ))}
                </div>
              </div>
            </>
          </article>
        </div>
      )}

      <div className="w-full centeralizer pb-3">
        <button className="btn-custom" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </>
  );
};

export default PostDetails;


// {/* {blogDetail?.post_comment?.map((data) =>
//           isLoading ? (
//             blogDetail?.post_comment?.map((data) => (
//               <AnimatedPage key={data.id} className="border-b border-slate-100">
//                 <CommentLoader />
//               </AnimatedPage>
//             ))
//           ) : (
//             <AnimatedPage key={data.id}>
//               <article
//                 className="flex pb-2 border-b border-slate-100"
//                 key={data.id}
//               >
//                 <div className=" pr-4">
//                   <img
//                     className="rounded-full max-w-none w-12 h-12  "
//                     src={data.user_pp ? data.user_pp : profileDefault}
//                     onError={onImageError}
//                     alt="asd"
//                   />
//                 </div>
//                 <div className="media-body">
//                   <div>
//                     <p className="inline-block text-base font-bold mr-2 ">
//                       {data.user}
//                     </p>
//                     <span className="text-slate-500 dark:text-slate-300">
//                       {moment(new Date(data.time_stamp)).fromNow()}
//                     </span>
//                   </div>
//                   <p className="text-justify max-h-20 overflow-auto">
//                     {data.content}
//                   </p>
//                 </div>
//               </article>
//             </AnimatedPage>
//           )
//         )} */}