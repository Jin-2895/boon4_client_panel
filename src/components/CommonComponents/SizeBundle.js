import React from "react";
import { CircularProgress, Radio } from "@mui/material";
import Modal from "./Modal";
import CustomSize from "./CustomSize";

const SizeBundle = ({
  deliveryType,
  checkBoxValue,
  setCheckBoxValue,
  type,
  boxesList = [],
}) => {
  const handleChange = (e) => {
    e.preventDefault();
    setCheckBoxValue(e.target.value);
  };

  // if (type) {
  //   if (deliveryType === type[0]?.name) {
  return (
    <>
      <div className="flex flex-col md:grid md:grid-cols-3 mt-[20px] md:mt-[35px] gap-4">
        {boxesList?.map((value) => {
          return (
            <div
              key={value?.id}
              className="border-[0.1rem] border-black/[20%] rounded-[6px] p-4"
            >
              <div className="flex flex-row gap-2 justify-between">
                <div className="flex flex-col">
                  <h1 className="font-[700] text-[18px] capitalize">
                    {value?.size}
                  </h1>
                  <div className="font-[400] text-[16px] leading-[19.2px] text-black/50 mt-[10px]">
                    <p>Weight {value?.weight}KG •</p>
                    <p className="mt-1">
                      {value?.length} (L) x {value?.width} (W) x {value?.height}{" "}
                      (H)
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Radio
                    checked={checkBoxValue == value?.id}
                    onChange={handleChange}
                    value={value?.id}
                    name="radio-buttons"
                    inputProps={{ "aria-label": "Small" }}
                  />
                </div>
              </div>
            </div>
          );
        })}
        {/* <Modal /> */}
      </div>
      <CustomSize
        filterType={type}
        boxesList={boxesList}
        setCheckBoxValue={setCheckBoxValue}
        handleChange={handleChange}
        checkBoxValue={checkBoxValue}
      />
    </>
  );
};

export default SizeBundle;
