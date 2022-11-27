import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { postAPI } from "../features/post/postService";
import { toastSuccess } from "../helpers/customToastify";

const DeleteModal = ({ blogDetail }) => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const navigate = useNavigate();
  let myKey = window.atob(localStorage.getItem("token"));
  // console.log(blogDetail.id);
  const deletePost = async (str) => {
    try {
      const config = {
        headers: {
          Authorization: `Token ${myKey}`,
        },
      };
      await postAPI.delete(`/posts/${blogDetail.slug}`, config);
    } catch (error) {
      console.log(error.message);
    } finally {
      setOpen(false);
      navigate("/");
      toastSuccess("Your post has been succesfully deleted.");
    }
  };

  return (
    <section>
      <button
        type="button"
        className="btn-red"
        title="Update Post"
        onClick={() => setOpen(true)}
      >
        Delete
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

          <div className="fixed inset-0 z-10 overflow-auto">
            {/* <div className="fixed inset-0 flex items-center justify-center"> */}
            <div className="flex min-h-full  justify-center p-4 text-center  items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 border-2  ">
                    <button
                      type="button"
                      className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white transition-all duration-300"
                      onClick={() => setOpen(false)}
                    >
                      <svg
                        aria-hidden="true"
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-6 text-center">
                      <svg
                        aria-hidden="true"
                        className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Are you sure you want to delete this post?
                      </h3>
                      <button
                        onClick={deletePost}
                        type="button"
                        className="text-white bg-red-400 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-md p-2 inline-flex items-center  dark:bg-red-500 dark:hover:bg-red-600  dark:focus:ring-red-500 transition-all duration-300 mr-1 sm:mr-5"
                      >
                        Yes, I'm sure
                      </button>
                      <button
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                        type="button"
                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-2 sm:px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 transition-all duration-300"
                      >
                        No, cancel
                      </button>
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

export default DeleteModal;
