import * as React from "react";
import { ReactComponent as CalEstimator } from "../../assets/svg/calEstimator.svg";
import moment from "moment";
import { useParams } from "react-router-dom";

export const DeliveryEstimator = () => {
  const { currency, estFare } = useParams();
  var today = moment();
  var tomorrow = moment(today).add(1, "days");
  const dateAndDay = tomorrow._d.toString();

  return (
    <>
      <div className="bg-white py-10 px-4 shadow-md">
        <div className="sm:px-4 md:px-6 lg:px-8">
          <div>
            <h1 className=" font-[700] text-[28px] leading-[33.6px]">
              Delivery estimator
            </h1>
            <p className="font-[400] text-[18px] leading-[21.6px] text-[#B0B0B0] mt-[13px]">
              Get an estimate for a delivery
            </p>
          </div>
          <div className="grid grid-row-2 md:grid-cols-2 gap-10 mt-[36px]"></div>
        </div>
        <div className="flex flex-col items-center justify-center mt-[47px]">
          <CalEstimator />

          <h1 className="font-[700] text-[30px] leading-[36px] mt-[21.58px]">
            {currency} {estFare}
          </h1>
          <p className="font-[400] text-[18px] leading-[24.3px] text-black/[50%] mt-[18px]">
            Initial delivery estimate
          </p>
          <button className="bg-[#CF2D39] flex flex-row justify-center items-center mt-[12px] mb-[13px] gap-8 px-[6rem] py-4">
            <h1 className="font-[700] text-[16px] leading-[19.2px] text-white text-center">
              Send it now
            </h1>
          </button>
        </div>
        <div className="mt-[42px] mb-[83px] sm:px-4 md:px-6 lg:px-8">
          <h2 className="font-[600] text-[20px] leading-[27.24px]">
            Arrive as soon as
          </h2>
          <h1 className="font-[600] text-[30px] leading-[40.85px] mt-[13px]">
            Tomorrow {dateAndDay}
          </h1>
          <p className="font-[400] text-[16px] leading-[24px] text-black/[50%] mt-[13px]">
            This is an estimate and actual times for delivery will depend on
            your location and specific type of delivery
          </p>
        </div>
      </div>
    </>
  );
};
