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

              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Upload file</label>
              <input
                class=" w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
              />

              <textarea
                placeholder="Content"
                // required
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
