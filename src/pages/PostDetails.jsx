import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getPostDetail, postComment } from "../features/post/postSlice";
import profileDefault from "../assets/images/default.webp";
import postDefault from "../assets/images/not-found.png";
import { useRef } from "react";
import { onImageError, onImageErrorPost } from "../helpers/functions";
import DeleteModal from "../components/DeleteModal";
import EditModal from "../components/EditModal";
import moment from "moment";
import { motion } from "framer-motion";
import { animations } from "../helpers/AnimatedPage";
import PostCounters from "../components/PostCounters";
import CommentSection from "../components/CommentSection";
import loader from "../assets/images/loading.svg";
import { DetailLoader } from "../helpers/loaders";
const PostDetails = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.user);
  const { blogDetail, isLoading, isLoadingComment } = useSelector(
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

  const handleComment = (e) => {
    e.preventDefault();
    let commentData = {
      comment: commentRef.current.value,
      detailURL: `/posts/${state?.slug}/`,
    };
    dispatch(postComment(commentData));
    commentRef.current.value = "";
  };
  useEffect(() => {
    dispatch(getPostDetail(detailData));
    if (!state) {
      navigate("/notfound");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, navigate, state]);
  return (
    <>
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1 }}
        className="py-16"
      >
        <>
          {isLoading ? (
            <div className="centeralizer min-h-81 pt-5 ">
              {/* <img src={loader} alt="loader" /> */}
              <DetailLoader />
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
                      className="max-w-full rounded-lg w-screen max-h-400px sm:max-h-700px min-h-20rem object-cover"
                      src={
                        blogDetail?.post_image
                          ? blogDetail?.post_image
                          : postDefault
                      }
                      onError={onImageErrorPost}
                      alt="post pic"
                    />
                  </div>
                  <div className="centeralizer flex-col py-2">
                    <h2 className="text-3xl font-extrabold text-center whitespace-pre-line">
                      {blogDetail?.title}
                    </h2>
                    <p className="text-slate-500 dark:text-slate-300 text-center">
                      {moment(new Date(blogDetail.date_posted)).format(
                        "DD MMM YYYY"
                      )}
                    </p>
                  </div>
                  <p className="text-justify max-h-60 overflow-auto bg-slate-700 p-2 rounded-md text-sm sm:text-base">
                    {blogDetail?.content}
                  </p>
                  {/* // ! author pp  */}
                  <article className="mb-4">
                    <div className="flex justify-between mt-4 flex-row">
                      <div className="  items-center justify-between">
                        <div className="flex">
                          <img
                            className="rounded-full max-w-none w-14 h-14 mr-3 object-cover"
                            src={
                              blogDetail?.author_pp
                                ? blogDetail?.author_pp
                                : profileDefault
                            }
                            onError={onImageError}
                            alt="asd"
                          />
                          <div className="flex flex-col">
                            <div className="flex items-center flex-col">
                              <p className="inline-block text-lg font-bold mr-2 ">
                                {blogDetail?.author}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* //! counters_____________________ */}
                      <PostCounters data={{ detailData, formData }} />
                      {/* //! counters_____________________ */}
                    </div>

                    {/* // ? modals _________________________________ */}
                    {authUser?.id === parseInt(blogDetail?.author_id) ? (
                      <div className=" flex gap-4 justify-end min-h-40px">
                        {/* {isLoading ? (
                          <>
                            <button className="btn-red">Delete</button>
                            <button className="btn-blue">Update</button>
                          </>
                        ) : ( */}
                        <>
                          <DeleteModal blogDetail={blogDetail} />
                          <EditModal blogDetails={{ blogDetail, detailData }} />
                        </>
                        {/* )} */}
                      </div>
                    ) : null}
                  </article>
                  {/* // ! modals _________________________________ */}
                  <form className="relative" onSubmit={handleComment}>
                    <input
                      className="py-2 pl-3 w-full h-11 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 outline-0 font-medium pr-20 transition-all duration-300 border-2 focus:border-blue-500"
                      type="text"
                      ref={commentRef}
                      required
                      placeholder="Write a comment"
                    />
                    <button
                      disabled={isLoadingComment}
                      className="flex absolute right-3 top-2/4 -mt-3 items-center disabled:cursor-wait"
                    >
                      <svg
                        className="fill-blue-500 dark:fill-slate-300 w-6 h-6 hover:fill-white transition-all duration-300"
                        viewBox="0 0 24 24"
                      >
                        <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"></path>
                      </svg>
                    </button>
                  </form>
                  {/* <!-- // ! Comments content --> */}
                  <div className="pt-6">
                    {/* <!-- //*  Comment row --> */}
                    <CommentSection />
                    {/* <!-- End comments row --> */}
                  </div>
                </>
                {/* )} */}
              </article>
            </div>
          )}
          <div className="w-full centeralizer pb-3">
            <button className="btn-custom" onClick={() => navigate(-1)}>
              Go Back
            </button>
          </div>
        </>
      </motion.div>
    </>
  );
};

export default PostDetails;
