import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postCreate } from "../features/post/postSlice";
import axios from "axios";
import { useEffect } from "react";
import AnimatedPage from "../helpers/AnimatedPage";

const NewBlog = () => {
  const navigate = useNavigate();
  const [categoryData, setCategory] = useState();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    post_image: "",
    category: "",
  });
  const { title, content, post_image, category } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const dispatch = useDispatch();
  const handleCreatePost = (e) => {
    e.preventDefault();
    let postCreateData = {
      postData: JSON.stringify(formData),
      navigate: navigate,
    };
    dispatch(postCreate(postCreateData));
  };

  const getCategories = async (str) => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API_URL + "/blog/category/",
        {}
      );
      setCategory(data);     
    } catch (error) {
      throw Error(error.message);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <AnimatedPage>
      <div className="centeralizer min-h-81 my-16 md:mb-0">
        <div className="bg-gray-900 bg-opacity-40 w-11/12 max-w-40rem sm:min-w-20rem h-fit flex flex-col items-center justify-start pb-6 text-white rounded-2xl transition-all duration-500 ease-linear centeralizer">
          <h2 className="text-3xl m-5 select-none"> Create a Post</h2>
          <div className="centeralizer w-11/12 max-w-xl text-slate-800">
            <form
              className="flex items-start flex-col w-screen text-base gap-2"
              onSubmit={handleCreatePost}
            >
              <div className="relative w-full">
                {/* //! floating */}
                <input
                  type="text"
                  name="title"
                  placeholder=" "
                  required
                  // autoFocus
                  autoComplete="false"
                  tabIndex="0"
                  // maxLength={21}
                  value={title}
                  onChange={onChange}
                  className="floating-input peer"
                />
                <label htmlFor="title" className="floating-label">
                  Title
                </label>
              </div> 
              {/* //! floating */}
              <div className="relative w-full">
                <input
                  type="text"
                  id="image"
                  label="image"
                  placeholder=" "
                  required
                  name="post_image"
                  className="floating-input peer"
                  value={post_image}
                  onChange={onChange}
                />
                <label htmlFor="image" className="floating-label">
                  Image URL
                </label>
              </div>
              <select
                id="category"
                name="category"
                className="bg-gray-50 border-2 border-gray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-main dark:border-sky-500 opacity-90 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-600 hover:opacity-100 transition-all duration-500 ease-linear "
                onChange={onChange}
                value={category}
                required
              >
                {/* <option defaultValue value="1" name="category">
                  Select a Category
                </option> */}
                <option  disabled value="" defaultValue>
                  Select a Category
                </option>
                {categoryData?.map((data) => (
                  <option key={data.id} value={data.id} name="category">
                    {data.name}
                  </option>
                ))}
              </select>
              <textarea
                type="text"
                placeholder="Content"
                className="post-input h-44 resize-none placeholder:text-gray-400" 
                required
                id="content"
                label="Content"
                name="content"
                value={content}
                onChange={onChange}
              /> 
              <button value="submit" className="btn-custom w-full ">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default NewBlog;
