import React from "react";
import "./pagesStyling/newBlog.scss";

const NewBlog = () => {
  return (
    <div>
      <div className="newBlog">
        <div className="contactForm">
          <h2 className="text-3xl"> Create a Post</h2>
          <div>
            <form className="blogForm">
              <input
                type="text"
                name="title"
                label="Title"
                placeholder="Title"
                required
                autoFocus
                maxLength={21}
                // value={title}
                // onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                id="image"
                label="ImageUrl"
                placeholder="Image URL"
                required 
                name="image"
                className="form-control"
                // value={imageUrl}
                // onChange={(e) => setImageUrl(e.target.value)}
              />

              <textarea
                placeholder="Content"
                required
                // autoFocus
                margin="normal"
                id="content"
                label="Content"
                type="text"
                name="description"
                // value={description}
                // onChange={(e) => setDescription(e.target.value)}
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
