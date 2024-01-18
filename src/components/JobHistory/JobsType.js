import React from "react";
import { ReactComponent as JobDistance } from "../../assets/svg/jobDistance.svg";
import { ReactComponent as ExpressDelivery } from "../../assets/svg/expressDelivery.svg";
import { ReactComponent as Package2 } from "../../assets/svg/package2.svg";
import { ReactComponent as Bag2 } from "../../assets/svg/bag2.svg";
import { ReactComponent as Online2 } from "../../assets/svg/online2.svg";
import calendar2 from "../../assets/svg/calendar2.svg";
import { useNavigate } from "react-router-dom";

const JobsType = ({ activeButton }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/single-job-details")}
      className="border-[0.15rem] border-black/[20%] rounded-lg w-full"
    >
      <div className="flex flex-col px-4 py-4">
        <div className="flex flex-row justify-between">
          <h1 className="font-[600] text-[18px] leading-[21.6px]">
            BBY01-806434794177
          </h1>
          {activeButton === "past" && (
            <p className="bg-[#3AC708]/[20%] text-[#369E12] font-[600] text-[14px] leading-[18px] text-center px-6 py-1 rounded-lg">
              COMPLETED
            </p>
          )}
          {activeButton === "active" && (
            <p className="bg-[#FDE5C0] text-[#B12D00] font-[600] text-[14px] leading-[18px] text-center px-6 py-1 rounded-lg">
              Delivery in progress
            </p>
          )}
          {activeButton === "cancelled" && (
            <p className="bg-[#CF2D39]/[20%] text-[#CF2D39] font-[600] text-[14px] leading-[18px] text-center px-6 py-1 rounded-lg">
              CANCELLED
            </p>
          )}
        </div>
        <div className="flex flex-row justify-between mt-[26px]">
          <div className="flex flex-row font-[400] text-[18px] leading-[21.6px] gap-2">
            <ExpressDelivery />
            <p>Express</p>
          </div>
          <div className="flex flex-row font-[400] text-[18px] leading-[21.6px] gap-2">
            <Package2 /> <p>Goods</p>
          </div>
          <div className="flex flex-row font-[400] text-[18px] leading-[21.6px] gap-2">
            <Bag2 /> <p>3 items</p>
          </div>
          <div className="flex flex-row font-[400] text-[18px] leading-[21.6px] gap-2">
            <Online2 /> <p>Online</p>
          </div>
          <div className="flex flex-row font-[400] text-[18px] leading-[21.6px] gap-2">
            <img src={calendar2} alt="calender 2" />
            <p>01/01/2023</p>
          </div>
        </div>
        <div className="flex justify-start flex-row mt-[22px] gap-4">
          <div className="items-center flex">
            <JobDistance />
          </div>
          <div className="flex flex-col gap-8 text-start">
            <div>
              <h1 className="font-[600] text-[18px] leading-[21.6px]">
                Kuching
              </h1>
              <p className="font-[400] text-[16px] leading-[19.2px] text-black/[50%]">
                Pusat Penjaja P/Kalan Ban Hock Lbh Java
              </p>
            </div>
            <div>
              <h1 className="font-[600] text-[18px] leading-[21.6px]">
                Kuching
              </h1>
              <p className="font-[400] text-[16px] leading-[19.2px] text-black/[50%]">
                Pusat Penjaja P/Kalan Ban Hock Lbh Java
              </p>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default JobsType;
