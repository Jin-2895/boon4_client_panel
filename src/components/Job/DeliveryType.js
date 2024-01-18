import { Radio } from "@mui/material";
import React from "react";
import DatePicker from "../CommonComponents/DatePicker";
import { ReactComponent as Express } from "../../assets/svg/expressDelivery.svg";
import { ReactComponent as Calender } from "../../assets/svg/calendar2.svg";
import { ReactComponent as OnTheWay } from "../../assets/svg/ontheway.svg";

export const DeliveryType = () => {
  return (
    <div className="sm:px-4 md:px-6 lg:px-8 w-full">
      <div>
        <h1 className="text-[20px] font-[600] leading-[27.24px]">
          How do you want your item(s) to be delivered?{" "}
          <span className="text-[#CF2D39]">*</span>
        </h1>
        <div className="flex md:grid md:grid-cols-2 xl:grid-cols-3 mt-[20px] md:mt-[35px] gap-4">
          <div className="border-[0.1px] border-black/20 rounded-md p-4">
            <div className="flex flex-row gap-2">
              <div className="mt-1 w-10 lg:w-6">
                <Express />
              </div>
              <div className="flex flex-col">
                <h1 className="font-[700] text-[18px] capitalize">
                  Express (RM 200)
                </h1>
                <h1 className="font-[600] text-[16px] leading-[19.2px] text-black/50">
                  Deliver immediately
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
                <Calender />
              </div>
              <div className="flex flex-col">
                <h1 className="font-[700] capitalize text-[18px]">
                  Schedule (RM 200)
                </h1>
                <h1 className="font-[600] text-[16px] leading-[19.2px] text-black/50">
                  Select date and time
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
                <OnTheWay />
              </div>
              <div className="flex flex-col">
                <h1 className="font-[700] capitalize text-[18px]">
                  On the way (RM 200)
                </h1>
                <h1 className="font-[600] text-[16px] leading-[19.2px] text-black/50">
                  Select date and time
                </h1>
              </div>
              <div className="">
                <Radio />
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-[20px] font-[600] leading-[27.24px] mt-[30px]">
          How do you want your item(s) to be delivered?{" "}
          <span className="text-[#CF2D39]">*</span>
        </h1>
        <p className="font-[400] text-[14px] leading-[18.9px] text-black/50 mt-[15px]">
          Select date and time for your on the way delivery
        </p>
        <div className="bg-white showdow-md">
          {/* <div inline-datepicker data-date="02/25/2022"></div> */}
          <DatePicker />
        </div>
      </div>
      <div>
        <h1 className="font-[700] text-[20px] leading-[27.24px] space-x-[1%] text-[#CF2D39] mt-[25px] mb-[13px] items-end text-end">
          Save delivery type
        </h1>
      </div>
    </div>
  );
};
