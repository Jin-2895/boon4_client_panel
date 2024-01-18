import React from "react";
import JobsType from "../../components/JobHistory/JobsType";

const JobHistory = () => {
  const [activeButton, setActiveButton] = React.useState("active");
  return (
    <>
      <div className="flex fex-col justify-between">
        <h1 className="font-[700] text-[25px] leading-[30px] text-black">
          Job History
        </h1>
        <div className="bg-white flex flex-row items-center p-[2px] rounded-lg">
          <button
            onClick={() => setActiveButton("active")}
            className={
              activeButton === "active"
                ? "text-center px-8 py-2 bg-[#CF2D39] text-white rounded-lg shadow-md font-[700] text-[13px] leading-[20px]"
                : "text-center px-8 py-2 font-[700] text-[13px] leading-[20px]"
            }
          >
            Active
          </button>
          {activeButton !== "active" && activeButton !== "past" ? (
            <span className="text-center">|</span>
          ) : (
            <span className="text-center invisible">|</span>
          )}
          <button
            onClick={() => setActiveButton("past")}
            className={
              activeButton === "past"
                ? "text-center px-8 py-2 bg-[#CF2D39] text-white rounded-lg shadow-md font-[700] text-[13px] leading-[20px]"
                : "text-center px-8 py-2 font-[700] text-[13px] leading-[20px]"
            }
          >
            Past
          </button>
          {activeButton !== "past" && activeButton !== "cancelled" ? (
            <span className="text-center">|</span>
          ) : (
            <span className="text-center invisible">|</span>
          )}
          <button
            onClick={() => setActiveButton("cancelled")}
            className={
              activeButton === "cancelled"
                ? "text-center px-8 bg-[#CF2D39] text-white rounded-md shadow-lg py-2 font-[700] text-[13px] leading-[20px]"
                : "text-center px-8 py-2 font-[700] text-[13px] leading-[20px]"
            }
          >
            Cancelled
          </button>
        </div>
      </div>
      <div className="bg-white py-6 px-[4rem] shadow-sm mt-8">
        {activeButton === "active" && <JobsType activeButton={activeButton} />}
        {activeButton === "past" && <JobsType activeButton={activeButton} />}
        {activeButton === "cancelled" && (
          <JobsType activeButton={activeButton} />
        )}
      </div>
    </>
  );
};

export default JobHistory;
