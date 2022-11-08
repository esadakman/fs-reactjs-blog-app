import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pagesStyling/newBlog.scss";
import { useDispatch } from "react-redux";
import { blogCreate } from "../features/post/postSlice";

const NewBlog = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    post_image: "",
  });
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const { title, content, post_image } = formData;
  const dispatch = useDispatch();

  const handleCreatePost = (e) => {
    e.preventDefault();
    let postCreateData = { postData: JSON.stringify(formData), navigate: navigate };
    dispatch(blogCreate(postCreateData)); 
  };
  // console.log(JSON.stringify(formData));
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
