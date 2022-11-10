import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pagesStyling/newBlog.scss";
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
      <div className="newBlog ">
        <div className="contactForm">
          <h2 className="text-3xl"> Create a Post</h2>
          <div>
            <form className="blogForm" onSubmit={handleCreatePost}>
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
              />
              <input
                type="text"
                id="image"
                label="image"
                placeholder="Image URL"
                required
                name="post_image"
                className="form-control"
                value={post_image}
                onChange={onChange}
              />
              {/* <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Select a Category
              </label> */}
              <select
                id="category"
                name="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={onChange}
                value={category}
              >
                <option defaultValue value="1" name="category">Select a Category</option>
                {categoryData?.map((data) => (
                  <option key={data.id} value={data.id} name="category">
                    {data.name}
                  </option>
                ))}
              </select>
              <textarea
                type="text"
                placeholder="Content"
                required
                id="content"
                label="Content"
                name="content"
                value={content}
                onChange={onChange}
              />
              <button value="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBlog;
