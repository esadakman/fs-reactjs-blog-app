import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import PostCard from "../components/PostCard";
import { getPost } from "../features/post/postSlice";
import AnimatedPage from "../helpers/AnimatedPage";
import { PostLoader } from "../helpers/loaders";
import NotFound from "./NotFound";

const SearchPage = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  // const { authUser } = useSelector((state) => state.user);
  // console.log(state)
  const { blogs, isLoading } = useSelector((state) => state.blog);
  useEffect(() => {
    let url = `/posts/?search=${state}`;
    dispatch(getPost(url));
  }, [state, dispatch]);
  // console.log(blogs, isLoading);
  // console.log(blogs?.results?.length > 0);
  return (
    <>
      {state ? (
        <AnimatedPage>
          {blogs?.results?.length > 0 ? (
            <AnimatedPage>
              <div className="overflow-x-hidden pb-24">
                <div className="min-h-74vh 2xl:min-h-81 flex justify-center items-center gap-5 md:gap-10  flex-wrap pt-4 sm:w-full">
                  {blogs?.results?.map((data) =>
                    isLoading ? (
                      <div key={data.id} className="centeralizer">
                        <PostLoader />
                      </div>
                    ) : (
                      <PostCard key={data.id} data={data} />
                    )
                  )}
                </div>
              </div>
            </AnimatedPage>
          ) : (
            <NotFound
              msg={"Sorry, we couldn't find what you're looking for."}
            />
          )}
        </AnimatedPage>
      ) : (
        <AnimatedPage>
          <NotFound />
        </AnimatedPage>
      )}
    </>
  );
};

export default SearchPage;
