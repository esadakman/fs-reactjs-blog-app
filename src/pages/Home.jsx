import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import { getPost } from "../features/post/postSlice";
import { PostLoader } from "../helpers/loaders";
import { motion } from "framer-motion";
import { animations } from "../helpers/AnimatedPage";
import { smoothScroll } from "../helpers/functions";

const Home = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.user);
  const { blogs, isLoading } = useSelector((state) => state.blog);
  useEffect(() => {
    let url = `/posts/`;
    dispatch(getPost(url));
  }, [authUser?.id, dispatch]);
  const handlePaginationNext = () => {
    dispatch(getPost(blogs?.next));
    smoothScroll();
  };
  const handlePaginationPrevious = () => {
    dispatch(getPost(blogs?.previous));
    smoothScroll();
  };

  return (
    <section className="overflow-x-hidden py-16 ">
      <div className="min-h-74vh 2xl:min-h-81 flex justify-center items-center gap-5 md:gap-10  flex-wrap pt-4 sm:w-full z-10">
        {isLoading
          ? [1, 2, 3].map((data, index) => (
              <motion.div
                key={index}
                className="centeralizer flex-wrap"
                variants={animations}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 1 }}
              >
                <PostLoader />
              </motion.div>
            ))
          : blogs?.results?.map((data) => (
              <PostCard key={data.id} data={data} />
            ))}
        {/* {blogs?.results?.map((data) =>
          isLoading ? (
            <motion.div
              key={data.id}
              className="centeralizer"
              variants={animations}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1 }}
            >
              <PostLoader />
            </motion.div>
          ) : (
            <PostCard key={data.id} data={data} />
          )
        )} */}
      </div>
      {authUser ? (
        <div className="w-full centeralizer py-2">
          <div className="w-full centeralizer gap-5 p-2 ">
            {blogs?.previous ? (
              <button className="btn-custom" onClick={handlePaginationPrevious}>
                Previous Page
              </button>
            ) : null}
            {blogs?.next ? (
              <button className="btn-custom" onClick={handlePaginationNext}>
                Next Page
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Home;
