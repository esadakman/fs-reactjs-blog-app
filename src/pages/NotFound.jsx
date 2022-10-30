import React from "react";
import { useNavigate } from "react-router-dom";
import vincent from "../assets/images/vincent.gif";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full  h-82 flex relative  overflow-hidden">
      <div className="w-full sm:w-80 flex  items-center justify-items-start sm:justify-center flex-col text-center">
        <img
          src={vincent}
          alt=""
          className="h-72 sm:h-80 absolute right-0 bottom-0"
        />
        <h1 className="text-10 leading-tight font-extralight m-0">404</h1>
        <p className="font-medium">Ooppss... Something went wrong</p>
        <button
          onClick={() => navigate(`/`)} 
          className=" btn-custom mt-2"
        >
          GO TO HOMEPAGE
        </button>
      </div>
    </section>
  );
};

export default NotFound;
