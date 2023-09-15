import React from "react";

export const Preloader = () => {
  return (
    <div className=" absolute w-full h-screen flex flex-col justify-center items-center  z-[9999999] space-y-5 pointer-events-none">
      <img src="./nnfl.png" className=" animate-pulse" alt="" />
      <p className=" text-white text-2xl">loading, please wait</p>
    </div>
  );
};
