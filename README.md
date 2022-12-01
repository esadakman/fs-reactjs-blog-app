# Full Stack - Blog App - Frontend

## Objective

- Project aims to create a Full Stack blog app project .
- This is the frontend side of my blog app project.
- I used django for backend.
  ##### You can see the backend side of this project from [here](https://github.com/esadakman/fs-blog-app-django-drf) 👈

## Description

- The welcome page will be the home page and the user will not be able to access other pages without login
- Users who have logged into the system will be able to see all posts on the home page and posts detail
on the detail page of the relevant post.  
- All users can comment or like their own posts and other users posts..
- Only posts owners will have the authority to edit and delete posts.
- Users can also update their user information and profile picture by coming to the profile section. 
- For register, login and profile update page, i used the formik-yup library in accordance with our backend.
- When the user logs in, we will send the token information and user informations values to sessionStorage.
- I used the window.btoa() and window.atob() methods while assigning and withdrawing the token to the storage.
- I used the Tailwind CSS for styling. 
- I also use the framer motion library for smooth transitions. 

## Project Link

#### You can reach my project from [here](https://fs-reactjs-blog-app.vercel.app/) 👈

## Project Skeleton

```
fs-reactjs-blog-app  (folder)
|----readme.md
SOLUTION
├── public
│    └── index.html
├── src
│    ├── app
│    │       └── store.jsx
│    ├── assets
│    │       └── [images] 
│    ├── components
│    │       ├── formik
│    │       │      ├─── Login 
│    │       │      │      ├── LoginForm.jsx
│    │       │      │      └── LoginSchema.jsx 
│    │       │      ├─── Profile 
│    │       │      │      ├── ProfileForm.jsx
│    │       │      │      └── ProfileSchema.jsx 
│    │       │      └─── Register 
│    │       │             ├── RegisterForm.jsx
│    │       │             └── RegisterSchema.jsx  
│    │       ├── DeleteModal.jsx
│    │       ├── EditModal.jsx
│    │       ├── Footer.jsx
│    │       ├── Navbar.jsx
│    │       ├── PostCard.jsx
│    │       └── PostDetails.jsx
│    ├── Features
│    │       ├── auth
│    │       │     ├── authService.js
│    │       │     └── authSlice.js
│    │       └── post
│    │             ├── postService.js
│    │             └── postSlice.js 
│    ├── helpers
│    │       ├── AnimatedPage.js
│    │       ├── customToastify.js
│    │       ├── functions.js
│    │       ├── loaders.js
│    │       └── ScrollToTop.js
│    ├── pages
│    │       ├── Home.js
│    │       ├── Login.js
│    │       ├── Myposts.js
│    │       ├── NewBlog.js
│    │       ├── NotFound.js
│    │       ├── Profile.jsx
│    │       ├── Register.jsx
│    │       └── SearchPage.jsx
│    ├── router 
│    │       └── AppRouter.jsx
│    ├── App.js
│    ├── App.css
│    └── index.js
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── yarn.lock
```

### At the end of the project, following topics are to be covered;

- HTML
- CSS
- JavaScript
- ReactJS
- Axios
- Redux Toolkit
- React Router DOM
- Formik-Yup
- Tailwind CSS
- Framer Motion
- React-Toastify

To run this project;

```
$ git clone https://github.com/esadakman/fs-reactjs-blog-app
$ cd ./fs-reactjs-blog-app
$ npm install / yarn
$ npm start / yarn start
```

### Preview of the Project
 
<img src="./blog-720.gif" alt="gif"   />
 