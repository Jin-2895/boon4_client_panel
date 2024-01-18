import { CircularProgress } from "@mui/material";
import React, { Children } from "react";

const JobType = ({ type, setDeliveryType, deliveryType, loading }) => {
  if (loading === true) {
    return (
      <div className="flex w-full h-[10rem] justify-center items-center">
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mt-[20px] md:mt-[35px] gap-4">
      {Children.toArray(
        type?.rows?.map((type) => (
          <button
            onClick={() => setDeliveryType(type.id)}
            className={
              "border-[0.1rem] cursor-pointer transition-all ease-in-out duration-300 md:px-8 lg:px-4 rounded-[6px] flex flex-col items-center gap-4 " +
              (deliveryType !== type.id
                ? " text-black/[50%] border-black/[20%] py-4 md:py-6 lg:py-4"
                : " text-[#CF2D39] border-[#CF2D39] py-3 md:py-5 lg:py-3")
            }
          >
            {deliveryType !== type.id ? (
              <img
                className="w-[3rem] lg:w-[3.5rem] "
                src={type?.icon?.uri}
                alt={type?.icon?.name + type.id}
              />
            ) : (
              <img
                className="tint-picture w-[3rem] lg:w-[3.5rem] "
                src={type?.icon?.uri}
                alt={type?.icon?.name + type.id}
              />
            )}
            <div>
              <p
                className={
                  "capitalize font-[700] text-[18px] leading-[24px] text-center " +
                  (deliveryType !== type.id ? "text-black" : "text-[#CF2D39]")
                }
              >
                {type.name}
              </p>
              <p className="mt-2 font-[400] text-[16px] leading-[18px]">
                {type.description}
              </p>
            </div>
          </button>
        ))
      )}
    </div>
  );
};

export default JobType;
