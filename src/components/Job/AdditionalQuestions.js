import { Input } from "@mui/material";
import React from "react";

const AdditionalQuestions = () => {
  return (
    <div className="sm:px-4 md:px-6 lg:px-8 w-full">
      <div>
        <h1 className="text-[18px] font-[400] leading-[21.6px]">
          Please enter any additional question if you have for driver
          <span className="text-[#CF2D39]"> *</span>
        </h1>
      </div>
      <div>
        <div>
          <h1 className="font-[400] text-[14px] leading-[16.8px] mt-[30px]">
            Any additional question (optional)
          </h1>
          <Input
            style={{
              border: "1px solid black",
              outline: "none",
              padding: "6px",
            }}
            type="text"
            className="mt-[8px] w-[20rem]"
          />
        </div>
      </div>
      <div>
        <h1 className="font-[700] text-[20px] leading-[27.24px] space-x-[1%] text-[#CF2D39] mt-[25px] mb-[13px] items-end text-end">
          + Add another
        </h1>
      </div>
    </div>
  );
};

export default AdditionalQuestions;
