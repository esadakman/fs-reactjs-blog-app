import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { useEffect } from "react";
import { postAPI } from "../features/post/postService";
import { toastError, toastSuccess } from "../helpers/customToastify";
import { getPostDetail } from "../features/post/postSlice";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";

const EditModal = ({ blogDetails }) => {
  const { blogDetail, detailData } = blogDetails;
  const [categoryData, setCategory] = useState();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const [formData, setFormData] = useState({
    title: blogDetail.title,
    content: blogDetail.content,
    post_image: blogDetail.post_image,
    category: blogDetail.category,
  });

  const getCategories = async (str) => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API_URL + "/blog/category/"
      );
      setCategory(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  let myKey = window.atob(localStorage.getItem("token"));
  const handleUpdate = async (e) => {
    e.preventDefault();
    let data = JSON.stringify({ 
      title: formData.title,
      content: formData.content,
      post_image: formData.post_image,
      category: formData.category,
    });
    try {
      var config = {
        method: "put",
        headers: {
          Authorization: `Token ${myKey}`,
        },
        data: data,
      };
      await postAPI(`/posts/${blogDetail.slug}/`, config);
      dispatch(getPostDetail(detailData));
      toastSuccess("Your post has been succesfully updated.");
    } catch (error) {
      console.log(error.message);
      toastError("Ooppss... Something went wrong");
    } finally {
      setOpen(false);
    }
  };

  return (
    <section>
      <button
        type="button"
        className="text-white bg-blue-400 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md p-2 inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-500 transition-all duration-300"
        title="Update Post"
        onClick={() => setOpen(true)}
      >
        Update
        <span className="sr-only">Icon description</span>
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-gray-500  text- shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  {/* // ! form */}
                  <div className="contactForm bg-gray-900 bg-opacity-40 w-full  h-fit flex flex-col items-center  pb-6 text-white  transition-all duration-500 ease-linear">
                    <h2 className="text-3xl m-5 "> Update Post</h2>
                    <div className="centeralizer w-11/12 max-w-xl text-slate-800">
                      <form
                        className="flex items-start flex-col w-screen text-base gap-2"
                        onSubmit={handleUpdate}
                      >
                        <input
                          type="text"
                          name="title"
                          label="Title"
                          placeholder="Title"
                          required
                          autoFocus
                          maxLength={21}
                          value={formData.title}
                          onChange={onChange}
                          className="transition-all duration-500 ease-linear w-full h-12 text-base indent-2 outline-none py-2 rounded-lg border-2 border-slate-900 bg-white placeholder:text-slate-900 "
                        />
                        <input
                          type="text"
                          id="image"
                          label="image"
                          placeholder="Image URL"
                          required
                          name="post_image"
                          className="transition-all duration-500 ease-linear w-full h-12 text-base indent-2 outline-none py-2 rounded-lg border-2 border-slate-900 bg-white  placeholder:text-slate-900 focus:border-blue-800 "
                          value={formData.post_image}
                          onChange={onChange}
                        />
                        <select
                          id="category"
                          name="category"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 opacity-80 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-600 hover:opacity-100 transition-all duration-500 ease-linear"
                          onChange={onChange}
                          value={formData.category}
                        >
                          {/* <option defaultValue name="category" >
                            Select a Category
                          </option> */}
                          <option value="1" name="category">
                            Select a Category
                          </option>
                          {categoryData?.map((data) => (
                            <option
                              key={data.id}
                              value={data.id}
                              name="category"
                            >
                              {data.name}
                            </option>
                          ))}
                        </select>

                        <textarea
                          type="text"
                          placeholder="Content"
                          className="transition-all duration-500 ease-linear  w-full h-44 text-base  outline-none p-2 rounded-lg border-2 border-slate-900 bg-white  placeholder:text-slate-900 focus:border-sky-300 resize-none"
                          required
                          id="content"
                          label="Content"
                          name="content"
                          value={formData.content}
                          onChange={onChange}
                        />
                        <button
                          value="submit"
                          className="text-white w-full text-base rounded-md tracking-wider p-3 dark:bg-gray-800 opacity-80 hover:opacity-100 transition-all duration-500 ease-linear "
                        >
                          Send
                        </button>
                      </form>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </section>
  );
};

export default EditModal;

// <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 border-2  ">
//                     <button
//                       type="button"
//                       className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white transition-all duration-300"
//                       onClick={() => setOpen(false)}
//                     >
//                       <svg
//                         aria-hidden="true"
//                         className="w-6 h-6"
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                           clipRule="evenodd"
//                         ></path>
//                       </svg>
//                       <span className="sr-only">Close modal</span>
//                     </button>
//                     <div className="p-6 text-center">
//                       <svg
//                         aria-hidden="true"
//                         className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                         ></path>
//                       </svg>
//                       <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
//                         Are you sure you want to delete this post?
//                       </h3>
//                       <button
//                         onClick={() => setOpen(false)}
//                         type="button"
//                         className="text-white bg-red-400 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-md p-2 inline-flex items-center  dark:bg-red-500 dark:hover:bg-red-600  dark:focus:ring-red-500 transition-all duration-300 mr-5"
//                       >
//                         Yes, I'm sure
//                       </button>
//                       <button
//                         onClick={() => setOpen(false)}
//                         ref={cancelButtonRef}
//                         type="button"
//                         className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 transition-all duration-300"
//                       >
//                         No, cancel
//                       </button>
//                     </div>
//                   </div>
