import React from "react";
import plumber from "../../../public/Rectangle 119.png"

const FormContainer = ({ children }) => {
  return (
    <div className="h-screen flex items-center justify-center relative">
      <div
        className="hidden md:block h-full w-full bg-cover bg-center absolute"
        style={{
          backgroundImage: `url(${plumber})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="bg-white pl-12 pr-12 pt-6 pb-6 rounded-[25px] shadow-lg w-[500px] z-10">
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
