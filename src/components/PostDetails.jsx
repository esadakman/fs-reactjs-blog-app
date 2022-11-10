import React from "react";
import { useLocation } from "react-router-dom";

const PostDetails = () => {
  const { state } = useLocation();
  console.log(state);
  // console.log((new Date(state.date_posted).toDateString()).split(' ').slice(1).join(' ').split(' 2').join(',2'));
  return (
    <div>
      {" "}
      <div className="wrapper pt-10 centeralizer">
        <article className="mb-4 break-inside p-6 rounded-xl bg-white dark:bg-slate-800 dark:text-white flex flex-col bg-clip-border w-11/12 md:w-8/12 lg:w-1/2">
          <div className="flex pb-6 items-center justify-between">
            <div className="flex">
              <a className="inline-block mr-4" href="/#">
                <img
                  className="rounded-full max-w-none w-14 h-14"
                  src="https://randomuser.me/api/portraits/women/9.jpg"
                  alt="asd"
                />
              </a>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <p className="inline-block text-lg font-bold mr-2 ">
                    {state.author}
                  </p>
                </div>
                <div className="text-slate-500 dark:text-slate-300">
                  {/* January 22, 2021 */}
                  {new Date(state.date_posted)
                    .toDateString()
                    .split(" ")
                    .slice(1)
                    .join(" ")}
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-extrabold ">{state.title}</h2>
          <div className="py-4">
            <a className="flex" href="/#">
              <img
                className="max-w-full rounded-lg w-screen "
                src={state.post_image}
                alt="post pic"
              />
            </a>
          </div>
          <p className="text-justify max-h-56 overflow-auto">{state.content}</p>
          <div className="py-4 flex">
            <div className="flex mr-2">
              <span className="mr-2">
                <svg
                  className="fill-rose-600 dark:fill-rose-400"
                  style={{ width: "24px", height: "24px" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
                </svg>
              </span>
              <span className="text-lg font-bold"> {state.like_count}</span>
            </div>
            <div className="flex">
            <span className="mr-2">
              <svg
                className="fill-slate-100 dark:fill-slate-100"
                style={{ width: "24px", height: "24px" }}
                viewBox="0 0 576 512"
              >
                <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z" />
              </svg>
            </span>
            <span className="text-lg font-bold"> {state.like_count}</span>
            </div>
          </div>

          <div className="relative">
            <input
              className="py-2 pl-3 w-full h-11 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium pr-20"
              type="text"
              placeholder="Write a comment"
            />
            <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
              <svg
                className="mr-2"
                style={{ width: "26px", height: "26px" }}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
                ></path>
              </svg>
              <svg
                className="fill-blue-500 dark:fill-slate-50 cursor-pointer"
                style={{ width: "24px", height: "24px" }}
                viewBox="0 0 24 24"
              >
                <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"></path>
              </svg>
            </span>
          </div>
          {/* <!-- Comments content --> */}
          <div className="pt-6">
            {/* <!-- Comment row --> */}
            <div className="media flex pb-4">
              <a className="mr-4" href="/#">
                <img
                  className="rounded-full max-w-none w-12 h-12"
                  src="https://randomuser.me/api/portraits/men/83.jpg"
                  alt="asd"
                />
              </a>
              <div className="media-body">
                <div>
                  <a
                    className="inline-block text-base font-bold mr-2"
                    href="/#"
                  >
                    Ronald Richards
                  </a>
                  <span className="text-slate-500 dark:text-slate-300">
                    25 minutes ago
                  </span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                  eiusmod 😀😀😀
                </p>
              </div>
            </div>
            {/* <!-- End comments row --> */}
            {/* <!-- More comments --> */}
            <div className="w-full">
              <a
                href="/#"
                className="py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75"
              >
                Show more comments
              </a>
            </div>
            {/* <!-- End More comments --> */}
          </div>
          {/* <!-- End Comments content --> */}
        </article>
      </div>
    </div>
  );
};

export default PostDetails;
