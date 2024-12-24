import React from "react";

const MainContainer = ({ children }) => {
  return (
    <div className="bg-white px-8 py-6 rounded-[25px] shadow-lg w-[500px] z-10">
      {children}
    </div>
  );
};

export default MainContainer;
