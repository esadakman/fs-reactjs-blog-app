import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { useEffect } from "react";
import { postAPI } from "../features/post/postService";
import { toastError, toastSuccess } from "../helpers/customToastify";
import { getPostDetail } from "../features/post/postSlice";
import { useDispatch } from "react-redux";
const EditModal = ({ blogDetails }) => {
  const { blogDetail, detailData } = blogDetails;
  const [categoryData, setCategory] = useState();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  let myKey = window.atob(localStorage.getItem("token"));

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
  }, [blogDetail]);
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
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
        className="btn-blue"
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
            <div className="flex min-h-full items-center justify-center p-2 text-center  sm:p-0">
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
                  <div className="bg-white bg-opacity-50 w-full  h-fit flex flex-col items-center  pb-6 text-main  transition-all duration-500 ease-linear">
                    <h2 className="text-3xl m-5 "> Update Post</h2>
                    <div className="centeralizer w-11/12 max-w-xl text-slate-800">
                      <form
                        className="flex items-start flex-col w-screen text-base gap-2"
                        onSubmit={handleUpdate}
                      >
                        <div className="relative w-full">
                          <input
                            type="text"
                            name="title"
                            placeholder=" "
                            required
                            autoComplete="false"
                            tabIndex="0"
                            value={formData.title}
                            onChange={onChange}
                            className="floating-input peer"
                          />
                          <label htmlFor="title" className="floating-label">
                            Title
                          </label>
                        </div>
                        <div className="relative w-full">
                          <input
                            type="text"
                            id="image"
                            placeholder=" "
                            required
                            name="post_image"
                            className="floating-input peer"
                            value={formData.post_image}
                            onChange={onChange}
                          />
                          <label htmlFor="image" className="floating-label">
                            Image URL
                          </label>
                        </div>

                        <select
                          id="category"
                          name="category"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-main dark:border-gray-600 opacity-90 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-600 hover:opacity-100 transition-all duration-500 ease-linear"
                          onChange={onChange}
                          value={formData.category}
                        >
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
                          className="post-input h-44 resize-none placeholder:text-gray-400 "
                          required
                          id="content"
                          label="Content"
                          name="content"
                          value={formData.content}
                          onChange={onChange}
                        />
                        <div className="flex w-full justify-between">
                          <div
                            className="btn-red w-48 cursor-pointer"
                            onClick={() => setOpen(false)}
                          >
                            Cancel
                          </div>
                          <button value="submit" className="btn-blue w-48 ">
                            Update
                          </button>
                        </div>
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
//  <input
//                           type="text"
//                           name="title"
//                           label="Title"
//                           placeholder="Title"
//                           required
//                           autoFocus
//                           maxLength={21}
//                           value={formData.title}
//                           onChange={onChange}
//                           className="transition-all duration-500 ease-linear w-full h-12 text-base indent-2 outline-none py-2 rounded-lg border-2 border-slate-900 bg-white placeholder:text-slate-900 "
//                         />
// {/* <input
//                           type="text"
//                           id="image"
//                           label="image"
//                           placeholder="Image URL"
//                           required
//                           name="post_image"
//                           className="transition-all duration-500 ease-linear w-full h-12 text-base indent-2 outline-none py-2 rounded-lg border-2 border-slate-900 bg-white  placeholder:text-slate-900 focus:border-blue-800 "
//                           value={formData.post_image}
//                           onChange={onChange}
//                         /> */}

//  {/* <option defaultValue name="category" >
//                             Select a Category
//                           </option> */}
//                           {/* <option value="1" name="category">
//                             Select a Category
//                           </option> */}
