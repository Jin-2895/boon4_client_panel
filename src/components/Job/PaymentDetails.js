import React from "react";
import { Input, Radio } from "@mui/material";
import homeLabel from "../../assets/svg/homeLabel.svg";
import workLabel from "../../assets/svg/workLabel.svg";

export const PaymentDetails = () => {
  return (
    <div className="sm:px-4 md:px-6 lg:px-8 w-full">
      <div>
        <h1 className="text-[20px] font-[600] leading-[27.24px]">
          How would you like to pay for your delivery?
          <span className="text-[#CF2D39]"> *</span>
        </h1>
        <div className="flex md:grid md:grid-cols-2 xl:grid-cols-3 mt-[20px] md:mt-[35px] gap-4">
          <div className="border-[0.1px] border-black/20 rounded-md p-4">
            <div className="flex flex-row gap-2">
              <div className="mt-1 w-10 lg:w-6">
                <img src={homeLabel} alt="home label" />
              </div>
              <div className="flex flex-col">
                <h1 className="font-[600] text-[16px] capitalize">Online</h1>
                <h1 className="font-[400] text-[14px] leading-[18.9px] text-black/50 mt-[10px]">
                  Driver will get the payment online
                </h1>
              </div>
              <div className="">
                <Radio />
              </div>
            </div>
          </div>
          <div className="border-[0.1px] border-black/20 rounded-md p-4">
            <div className="flex flex-row gap-2">
              <div className="mt-1 w-10 lg:w-6">
                <img src={workLabel} alt="home label" />
              </div>
              <div className="flex flex-col">
                <h1 className="font-[600] capitalize text-[16px]">
                  Cash on delivery
                </h1>
                <h1 className="font-[400] text-[14px] leading-[18.9px] text-black/50 mt-[10px]">
                  Select at which location driver will recieve the money
                </h1>
              </div>
              <div className="">
                <Radio />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-[50px]">
          <h1 className="font-[700] text-[18px] leading-[21.6px]">
            Do you have a promo code that you would like to use?
          </h1>
        </div>
        <div>
          <h1 className="font-[400] text-[18px] leading-[21.6px] mt-[25px]">
            Promo code
          </h1>
          <div className="flex md:flex-row flex-col gap-4 mt-[14px]">
            <Input
              style={{
                border: "1px solid black",
                outline: "none",
                padding: "6px",
              }}
              type="text"
              className=" w-[20rem]"
            />
            <div>
              <button className="bg-[#CF2D39]/[5%] px-6 py-3 border-[1px] border-[#CF2D39] text-[#CF2D39] font-[700] text-[18px]">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="bg-[#CF2D39] flex flex-row justify-center items-center mt-[25px] mb-[13px] gap-8 px-8 py-4">
          <h1 className="font-[700] text-[16px] leading-[19.2px] text-white text-center">
            Save & view job summary
          </h1>
          <svg
            width="15"
            height="13"
            viewBox="0 0 15 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.375375 5.70815H11.9226L7.73233 1.51785L8.85175 0.398438L14.9531 6.49981L8.85175 12.6012L7.73233 11.4818L11.9226 7.29148H0.375375V5.70815Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
