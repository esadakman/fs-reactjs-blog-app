import React from "react";
import { useNavigate } from "react-router-dom";
import vincent from "../assets/images/vincent.gif";
import AnimatedPage from "../helpers/AnimatedPage";

const NotFound = ({ msg }) => {
  const navigate = useNavigate();
  return (
    <AnimatedPage>
      <section className="w-full  h-screen flex relative  overflow-hidden pt-16">
        <div className="w-full sm:w-80 flex  items-center justify-items-start sm:justify-center flex-col text-center">
          <img
            src={vincent}
            alt="vincent vega gif"
            className="h-72 sm:h-80 absolute right-0 bottom-10 mb-6"
          />
          <h1 className="text-8xl sm:text-10 leading-tight font-extralight m-0 ">404</h1>
          <p className="font-medium">
            {msg ? msg : "Ooppss... Something went wrong"}
          </p>
          <button onClick={() => navigate(`/`)} className=" btn-custom mt-4 text-sm sm:text-xl">
            GO TO HOMEPAGE
          </button>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default NotFound;
