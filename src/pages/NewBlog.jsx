import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { blogCreate } from "../features/post/postSlice";
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
    category: 1,
  });
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const { title, content, post_image, category } = formData;
  const dispatch = useDispatch();

  const handleCreatePost = (e) => {
    e.preventDefault();
    let postCreateData = {
      postData: JSON.stringify(formData),
      navigate: navigate,
    };
    dispatch(blogCreate(postCreateData));
  };

  const getCategories = async (str) => {
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/blog/category/`,
        {}
      );
      setCategory(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  // console.log(formData);
  // console.log(formData.category);

  return (
    <AnimatedPage>
      <div className="centeralizer min-h-81 mb-16 md:mb-0">
        <div className="bg-gray-900 bg-opacity-40 w-11/12 max-w-40rem sm:min-w-20rem h-fit flex flex-col items-center justify-start pb-6 text-white rounded-2xl transition-all duration-500 ease-linear centeralizer">
          <h2 className="text-3xl m-5 "> Create a Post</h2>
          <div className="centeralizer w-11/12 max-w-xl text-slate-800">
            <form
              className="flex items-start flex-col w-screen text-base gap-2"
              onSubmit={handleCreatePost}
            >
              <input
                type="text"
                name="title"
                label="Title"
                placeholder="Title"
                required
                autoFocus
                maxLength={21}
                value={title}
                onChange={onChange}
                className="post-input h-12"
              />
              <input
                type="text"
                id="image"
                label="image"
                placeholder="Image URL"
                required
                name="post_image"
                className="post-input h-12"
                value={post_image}
                onChange={onChange}
              />
              <select
                id="category"
                name="category"
                className="bg-gray-50 border-2 border-gray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-main dark:border-sky-500 opacity-90 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-600 hover:opacity-100 transition-all duration-500 ease-linear "
                onChange={onChange}
                value={category}
              >
                {/* <option defaultValue value="1" name="category">
                  Select a Category
                </option> */}
                <option value="1" name="category">
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
                className="post-input h-44 resize-none"
                // className="transition-all duration-500 ease-linear  w-full h-44 text-base  outline-none p-2 rounded-lg border-2 border-slate-900 bg-white  placeholder:text-slate-900 focus:border-sky-300 "
                required
                id="content"
                label="Content"
                name="content"
                value={content}
                onChange={onChange}
              />
              <button
                value="submit"
                className="btn-custom w-full " 
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default NewBlog;
