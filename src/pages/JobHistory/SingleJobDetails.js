import React from "react";
import { ReactComponent as JobID } from "../../assets/svg/jobID.svg";
import { ReactComponent as ItemBag } from "../../assets/svg/itemBag.svg";
import { BackButton } from "../../components/CommonComponents/BackButton";

const SingleJobDetails = () => {
  return (
    <div className="bg-white shadow-lg mb-[79px] mt-[60px]">
      <div className="px-10 py-6">
        <div className="flex justify-between flex-col gap-6 md:gap-0 md:flex-row">
          <BackButton />
          <div className="flex flex-row justify-end gap-2 md:gap-6">
            <button className="font-[700] text-[16px] xl:text-[15px] 2xl:text-[14px] text-[#CF2D39] border-2 bg-[#CF2D39]/[10%] border-[#CF2D39] px-4 md:px-8 py-2">
              Share
            </button>
            <button className="font-[700] text-[16px] xl:text-[15px] 2xl:text-[14px] text-[#CF2D39] border-2 bg-[#CF2D39]/[10%] border-[#CF2D39] px-4 md:px-8 py-2">
              Repost job
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-[30.38px]">
          <div className="flex flex-col gap-4">
            <h1 className="font-[700] text-[20px] leading-[24px]">Job ID</h1>
            <div className="flex flex-row gap-2">
              <JobID />
              <p className="font-[600] text-[18px] leading-[21.6px] text-black/[50%]">
                B4D0 - A4E4 - 0F8F - 505A
              </p>
            </div>
          </div>
          <div className="font-[600] text-[20px] leading-[24px] text-[#CF2D39]">
            <p>RM 119.0</p>
          </div>
        </div>
        <div className="mt-[14px]">
          <h1 className="font-[600] text-[20px] leading-[24px]">Your Items</h1>
          <div className="mt-[15px] flex flex-row gap-4 items-center">
            <ItemBag />
            <p className="font-[600] text-[16px] leading-[19.2px] text-black/[50%] text-center">
              1 items
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SingleJobDetails;
