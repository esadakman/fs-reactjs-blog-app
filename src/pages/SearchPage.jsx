import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import PostCard from "../components/PostCard";
import { getPost } from "../features/post/postSlice";
import { animations } from "../helpers/AnimatedPage";
import { PostLoader } from "../helpers/loaders";
import NotFound from "./NotFound";
import { motion } from "framer-motion";
import loader from "../assets/images/loading.svg";

const SearchPage = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { blogs, isLoading } = useSelector((state) => state.blog);
  useEffect(() => {
    let url = `/posts/?search=${state}`;
    dispatch(getPost(url));
  }, [state, dispatch]);

  return (
    <>
      {isLoading ? (
        <div className="min-h-screen centeralizer">
        <img src={loader} alt="" />
      </div>
      ) : state ? (
        <>
          {blogs?.results?.length > 0 ? (
            <motion.div
              variants={animations}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1 }}
              className="overflow-x-hidden py-20"
            >
              <div className="min-h-74vh 2xl:min-h-81 flex justify-center items-center gap-5 md:gap-10  flex-wrap pt-4 sm:w-full">
                {blogs?.results?.map((data) =>
                  isLoading ? (
                    <motion.div
                      variants={animations}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 1 }}
                      key={data.id}
                      className="centeralizer"
                    >
                      <PostLoader />
                    </motion.div>
                  ) : (
                    <PostCard key={data.id} data={data} />
                  )
                )}
              </div>
            </motion.div>
          ) : (
            <NotFound
              msg={"Sorry, we couldn't find what you're looking for."}
            />
          )}
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default SearchPage;
