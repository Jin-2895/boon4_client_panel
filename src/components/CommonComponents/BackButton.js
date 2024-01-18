import React from "react";
import { ReactComponent as BackArrow } from "../../assets/svg/backArrow.svg";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate(-1);
  };
  return (
    <div className=" flex flex-row items-center p-[2px] rounded-lg">
      <div>
        <button
          onClick={() => handleBackButton()}
          className="font-[600] text-[16px] leading-[21.79px] text-[#CF2D39] flex flex-row justify-center items-center text-center px-2"
        >
          <BackArrow />
          <p className="text-center ml-[13px] mb-[0.3px]">Back</p>
        </button>
      </div>
    </div>
  );
};
