import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../features/post/postSlice";
import { PostLoader } from "../helpers/loaders";
import PostCard from "../components/PostCard";
import AnimatedPage from "../helpers/AnimatedPage";
import { useNavigate } from "react-router-dom";

const MyPosts = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.user);
  // console.log(authUser)
  const { blogs, isLoading } = useSelector((state) => state.blog);
  useEffect(() => {
    let url = `/posts/?author=${authUser?.id}`;
    dispatch(getPost(url));
  }, [authUser?.id, dispatch]); 
  const navigate = useNavigate();

  return (
    <AnimatedPage>
      <div className="overflow-x-hidden pt-16 pb-20">
        <div className="min-h-74vh 2xl:min-h-81 flex justify-center items-center gap-5 md:gap-10  flex-wrap pt-4 sm:w-full">
          {isLoading ? (
            <div className="centeralizer max-w-11/12 2xl:min-h-81 gap-5 md:gap-10 sm:w-full flex-wrap">
              {[0, 1, 2].map((data, index) => (
                <PostLoader key={index} />
              ))}
            </div>
          ) : blogs?.results?.length > 0 ? (
            blogs?.results?.map((data) => (
              <PostCard key={data.id} data={data} />
            ))
          ) : (
            <div className="centeralizer flex-col">
              <h1 className="text-3xl leading-tight font-extralight tracking-wide">
                No posts yet. Start posting
              </h1>
              <button
                onClick={() => navigate(`/newblog`)}
                className=" btn-custom mt-4 w-fit px-"
              >
                New Post
              </button>
            </div>
          )}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default MyPosts;
