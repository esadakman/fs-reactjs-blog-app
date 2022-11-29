import React from "react"; 
const ProfileForm = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  handleSubmit,
  dirty,
  isValid,
}) => { 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" className="block my-1">
            Username
          </label>
          <input
            type="text"
            name="user.username"
            id="username"
            className={
              errors.user?.username
                ? "profile-input border-pink-500 animate-handshake"
                : "profile-input border-slate-500 focus:border-blue-500"
            }
            // className="profile-input"
            placeholder="User Name"
            required=""
            value={values.user.username || ""}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.user && touched.user ? (
            <p className="ml-2 mt-2 text-pink-600 text-sm ">
              {errors.user.username}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="block my-1">
            E-mail
          </label>
          <input
            type="text"
            name="user.email"
            id="username"
            className={
              errors.user?.email
                ? "profile-input  border-pink-500 animate-handshake"
                : "profile-input border-slate-500 focus:border-blue-500"
            }
            placeholder="name@company.com"
            required=""
            value={values.user.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.user && touched.user ? (
            <p className="ml-2 mt-2 text-pink-600 text-sm">
              {errors.user.email}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="Name" className="block my-1">
            Name
          </label>
          <input
            type="Name"
            name="user.first_name"
            id="Name"
            className={
              errors.user?.first_name
                ? "profile-input  border-pink-500 animate-handshake"
                : "profile-input border-slate-500 focus:border-blue-500"
            }
            placeholder="Name"
            required=""
            value={values.user.first_name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.user && touched.user ? (
            <p className="ml-2 mt-2 text-pink-600 text-sm">
              {errors.user.first_name}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="Surname" className="block my-1">
            Surname
          </label>
          <input
            type="Surname"
            name="user.last_name"
            id="Surname"
            className={
              errors.user?.last_name
                ? "profile-input  border-pink-500 animate-handshake"
                : "profile-input border-slate-500 focus:border-blue-500"
            }
            placeholder="Surname"
            required=""
            value={values.user.last_name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.user && touched.user ? (
            <p className="ml-2 mt-2 text-pink-600 text-sm">
              {errors.user.last_name}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="image" className="block my-1">
            Image
          </label>
          <input
            type="text"
            name="image"
            id="Image"
            className={
              errors.image
                ? "profile-input  border-pink-500 animate-handshake"
                : "profile-input border-slate-500 focus:border-blue-500"
            }
            placeholder="Image Url"
            required
            value={values.image}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.image && touched.image ? (
            <p className="ml-2 mt-2 text-pink-600 text-sm">{errors.image}</p>
          ) : null}
        </div>
        <button
          type="submit"
          disabled={!(isValid && dirty)}
          className="btn-blue w-full mt-3 "
          title="Make a change for update !"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
