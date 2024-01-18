import React from "react";
import login_image from "../../assets/images/login-image.png";

const SideTwo = () => {
  return (
    <div className="hidden lg:flex lg:w-full xl:w-[50%] 2xl-[40%] justify-end">
      <img src={login_image} alt="" className="w-[95%] h-[100vh]" />
    </div>
  );
};

export default SideTwo;
