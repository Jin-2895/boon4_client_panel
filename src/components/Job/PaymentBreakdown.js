import React from "react";

const PaymentBreakdown = () => {
  return (
    <div className="w-full">
      <div className="sm:px-4 md:px-6 lg:px-8 grid grid-cols-2">
        <div>
          <h1 className="font-[600] text-[17px] leading-[20.4px]">Best rate</h1>
          <p className="font-[400] text-[16px] leading-[19.2px] mt-[10px]">
            Distance of 25 miles
          </p>
        </div>
        <div className="flex justify-end">
          <h1 className="font-[400] text-[17px] leading-[20.4px] text-[#CF2D39] mt-[10px]">
            RM 119.0
          </h1>
        </div>
      </div>
      <div className="sm:px-4 md:px-6 lg:px-8 grid grid-cols-2">
        <div>
          <h1 className="font-[600] text-[17px] leading-[20.4px] mt-[20px]">
            Coverage
          </h1>
          <p className="font-[400] text-[16px] leading-[19.2px] mt-[10px]">
            Up to RM 500
          </p>
        </div>
        <div className="flex justify-end">
          <h1 className="font-[400] text-[17px] leading-[20.4px] text-[#CF2D39]">
            RM 119.0
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-[#CF2D39]/[2%] border-[1px] border-[#CF2D39] py-4 rounded-md shadow-sm p-0 mt-[21px]">
        <div className="sm:px-4 md:px-6 lg:px-8">
          <h1 className="font-[600] text-[17px] leading-[20.4px]">
            You will pay
          </h1>
        </div>
        <div className="flex justify-end sm:px-4 md:px-6 lg:px-8">
          <h1 className="font-[400] text-[17px] leading-[20.4px] text-[#CF2D39]">
            RM 119.0
          </h1>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="bg-[#CF2D39] flex flex-row justify-center items-center mt-[25px] mb-[13px] gap-8 px-8 py-4">
          <h1 className="font-[700] text-[16px] leading-[19.2px] text-white text-center">
            Pay & create job
          </h1>
        </button>
      </div>
    </div>
  );
};

export default PaymentBreakdown;
