import { Typography } from "@mui/material";
import React from "react";
import { ReactComponent as PackageSvg } from "../../assets/svg/package.svg";
import { ReactComponent as PackageSvgActive } from "../../assets/svg/packageactive.svg";
import { ReactComponent as Paws } from "../../assets/svg/paws.svg";
import { ReactComponent as PawsActive } from "../../assets/svg/pawsactive.svg";
import useHover from "../../CusHooks/UseHover";

export const JobType = ({ jobType, jobTypeHandler, handleChange }) => {
  const [hoverRef1, isHovered1] = useHover();
  const [hoverRef2, isHovered2] = useHover();

  React.useEffect(() => {
    if (jobType) {
      handleChange("panel2");
    }
  }, [jobType]);

  return (
    <div className="sm:px-4 md:px-6 lg:px-8">
      <Typography fontWeight="600">
        What kind of items are you sending? *
      </Typography>
      <div className="flex my-5 w-full sm:justify-start justify-between">
        <div
          id="type1"
          className="flex flex-col justify-center items-center sm:w-36 sm:h-[8rem] w-24 h-[6rem] border-[1px] border-[#000] border-opacity-20 rounded-md hover:border-[#CF2D39] hover:cursor-pointer hover:text-[#CF2D39] hover:opacity-100 opacity-50"
          onClick={() => {
            jobTypeHandler("Pet");
            handleChange("panel2");
          }}
          ref={hoverRef1}
        >
          <div className="">{isHovered1 ? <PawsActive /> : <Paws />}</div>
          <p className="">Pet</p>
        </div>
        <div
          id="type1"
          className="flex flex-col justify-center items-center sm:w-36 sm:h-[8rem] w-24 h-[6rem] border-[1px] border-[#000] border-opacity-20 rounded-md hover:border-[#CF2D39] hover:cursor-pointer hover:text-[#CF2D39] hover:opacity-100 opacity-50 sm:ml-8 ml-0"
          onClick={() => jobTypeHandler("Goods")}
          ref={hoverRef2}
        >
          <div className="">
            {isHovered2 ? <PackageSvgActive /> : <PackageSvg />}
          </div>
          <p className="">Goods</p>
        </div>
      </div>
    </div>
  );
};
