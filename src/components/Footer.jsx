import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center h-16 px-2 sm:px-5 bg-gray-900 text-black no-underline ">
      <div className="text-xs sm:text-sm text-white font-medium ">
        <p className="">
          Copyright &#169;
          {new Date().getFullYear()} Esad Akman
        </p>
      </div>
      <div className="flex justify-between gap-4">
        <a
          href="https://esadakman.github.io/"
          target="_blank"
          rel="noreferrer"
          className="footer-icons"
        > 
          <i className="fa-sharp fa-solid fa-globe"></i>
        </a>
        <a
          href="https://github.com/esadakman"
          target="_blank"
          rel="noreferrer"
          className="footer-icons "
        >
          <i className="fa-brands fa-github "></i>
        </a>
        <a
          href="https://www.linkedin.com/in/esadakman/"
          target="_blank"
          rel="noreferrer"
          className="footer-icons"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
