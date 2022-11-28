import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import { getPost } from "../features/post/postSlice";
import { PostLoader } from "../helpers/loaders"; 
import { useRef } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.user);
  const { blogs, isLoading } = useSelector((state) => state.blog);
  const [limit, setLimit] = useState(3);
  const bottomRef = useRef(null);
  const scrollToBottom = () => {
    bottomRef?.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    let url = `/posts/?limit=${limit}`;
    dispatch(getPost(url)); 
  }, [authUser?.id, dispatch, limit]);
  const handlePaginationNext = () => {
    setLimit(Math.ceil(limit / 3.0) * 3 + 3);
    setTimeout(scrollToBottom, 50);
    // scrollToBottom();
  };
  const handlePaginationPrevious = () => {
    setLimit(Math.ceil(limit / 3.0) * 3 - 3);
  };
  return (
    <>
      <section className="overflow-x-hidden py-16 ">
        <div className="min-h-74vh 2xl:min-h-81 flex justify-center items-center gap-5 md:gap-10  flex-wrap pt-4 sm:w-full z-10 ">
          {isLoading
            ? blogs?.results?.map((data) => <PostLoader key={data.id} />)
            : blogs?.results?.map((data) => (
                <PostCard key={data?.id} data={data} />
              ))}
        </div>
        {authUser ? (
          <div className="w-full centeralizer py-2">
            <div className="w-full centeralizer gap-5 p-2 ">
              {limit > 3 ? (
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
      <div ref={bottomRef}></div>
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
//           )
//         )} */}
