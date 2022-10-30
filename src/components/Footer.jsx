import React from "react";

const Footer = () => {
  return (
    <footer className=" centeralizer h-11 px-4 bg-gray-800 text-black no-underline   ">
      <div className="text-xs text-white font-medium " >
        <p className="">
          Copyright &#169;
          {new Date().getFullYear()} Esad Akman
        </p>
      </div>
      <div className="flex justify-between gap-3">
        <a
          href="https://www.twitter.com/"
          target="_blank"
          rel="noreferrer"
          className="footer-icons"
        >
          <i className="icon twitter devicon-twitter-original" />
        </a>
        <a
          href="https://github.com/esadakman"
          target="_blank"
          rel="noreferrer"
          className="footer-icons "
        >
          <i className="icon github  devicon-github-original" />
        </a>
        <a
          href="https://www.linkedin.com/in/esadakman/"
          target="_blank"
          rel="noreferrer"
          className="footer-icons"
        >
          <i className="icon linkedin devicon-linkedin-plain" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
