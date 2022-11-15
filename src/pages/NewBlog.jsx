import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { blogCreate } from "../features/post/postSlice";
import axios from "axios";
import { useEffect } from "react";

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
    <div>
      <div className="newBlog centeralizer min-h-82   ">
        <div className="contactForm bg-gray-900 bg-opacity-40 w-11/12 max-w-40rem min-w-20rem h-fit flex flex-col items-center justify-start pb-6 text-white rounded-2xl transition-all duration-500 ease-linear">
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
                value={post_image}
                onChange={onChange}
              />
              <select
                id="category"
                name="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 opacity-80 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-600 hover:opacity-100 transition-all duration-500 ease-linear"
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
                className="transition-all duration-500 ease-linear  w-full h-44 text-base  outline-none p-2 rounded-lg border-2 border-slate-900 bg-white  placeholder:text-slate-900 focus:border-sky-300 resize-none"
                required
                id="content"
                label="Content"
                name="content"
                value={content}
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
      </div>
    </div>
  );
};

export default NewBlog;
