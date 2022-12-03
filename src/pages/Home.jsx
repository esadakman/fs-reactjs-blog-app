import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import { getPost } from "../features/post/postSlice";
import { PostLoader } from "../helpers/loaders";

const Home = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.user);
  const { blogs, isLoading } = useSelector((state) => state.blog);
  const [limit, setLimit] = useState(6);
  useEffect(() => {
    let url = `/posts/?limit=${limit}`;
    dispatch(getPost(url));
  }, [authUser?.id, dispatch, limit]);
  const handlePaginationNext = () => {
    setLimit(Math.ceil(limit / 6.0) * 6 + 3);
    // console.log(Math.ceil(limit / 6.0) * 6 + 3);
  };
  const handlePaginationPrevious = () => {
    // console.log(Math.ceil(limit / 6.0) * 6 - 6);
    setLimit(Math.ceil(limit / 6.0) * 6 - 6);
  }; 
  return (
    <>
      {isLoading ? (
        <div className="min-h-screen centeralizer py-20">
          <div className="centeralizer   max-w-11/12 min-h-74vh 2xl:min-h-81   gap-5 md:gap-10 pt-4 sm:w-full flex-wrap">
            {Array(limit)
              .fill()
              .map((data, index) => (
                <PostLoader key={index} />
              ))}
          </div>
        </div>
      ) : (
        // </div>
        <section className="overflow-x-hidden py-20 md:mb-5">
          <div className="min-h-74vh 2xl:min-h-81 flex justify-center items-center gap-5 md:gap-10  flex-wrap pt-4 sm:w-full z-10 ">
            {blogs?.results?.map((data) => (
              <PostCard key={data?.id} data={data} />
            ))}
          </div>
          {authUser ? (
            <div className="w-full centeralizer py-2">
              <div className="w-full centeralizer gap-5 p-2 ">
                {limit > 6 ? (
                  <button
                    className="btn-custom"
                    onClick={handlePaginationPrevious}
                  >
                    View Less
                  </button>
                ) : null}
                {blogs?.next ? (
                  <button className="btn-custom" onClick={handlePaginationNext}>
                    View More
                  </button>
                ) : null}
              </div>
            </div>
          ) : null}
        </section>
      )}
    </>
  );
};

export default Home;

// {/* {blogs?.results?.map((data) =>
//           isLoading ? (
//             <motion.div
//               key={data.id}
//               className="centeralizer"
//               variants={animations}
//               initial="initial"
//               animate="animate"
//               exit="exit"
//               transition={{ duration: 1 }}
//             >
//               <PostLoader />
//             </motion.div>
//           ) : (
//             <PostCard key={data.id} data={data} />
//   )
// )} */}
