import React from "react";
import SavedAddress from "../../pages/SavedAddress/SavedAddress";
import { Input, InputLabel, MenuItem, Radio, Select } from "@mui/material";
import homeLabel from "../../assets/svg/homeLabel.svg";
import workLabel from "../../assets/svg/workLabel.svg";
import sizeLabel from "../../assets/svg/sizeLabel.svg";
import weightLabel from "../../assets/svg/weightLabel.svg";
import LWHLabel from "../../assets/svg/LWHLabel.svg";
import uploadImage from "../../assets/svg/uploadImage.svg";
import { useNavigate } from "react-router-dom";

export const PickupInfo = () => {
  const navigate = useNavigate();
  return (
    <div className="sm:px-4 md:px-6 lg:px-8 w-full">
      <div>
        <h1 className="text-[20px] font-[600] leading-[27.24px]">
          Where should the driver pickup the item(s)?
          <span className="text-[#CF2D39]"> *</span>
        </h1>
        <div className="flex md:grid md:grid-cols-3 mt-[20px] md:mt-[35px] gap-4">
          <div className="border-[0.1px] border-black/20 rounded-md p-4">
            <div className="flex flex-row gap-2">
              <div className="mt-1 w-10 lg:w-6">
                <img
                  className="min-w-[1rem]"
                  src={homeLabel}
                  alt="home label"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="font-[700] text-[18px] capitalize">Home</h1>
                <h1 className="font-[600] text-[14px] leading-[19.2px] text-black/50">
                  Jalan meranti 3, Pekan Batang kalilorems
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
                <img
                  className="min-w-[1rem]"
                  src={workLabel}
                  alt="home label"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="font-[700] capitalize text-[18px]">Work</h1>
                <h1 className="font-[600] text-[14px] leading-[19.2px] text-black/50">
                  Jalan meranti 3, Pekan Batang kalilorems
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
                <img
                  className="min-w-[1rem]"
                  src={workLabel}
                  alt="home label"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="font-[700] capitalize text-[18px]">Work</h1>
                <h1 className="font-[600] text-[14px] leading-[19.2px] text-black/50">
                  Jalan meranti 3, Pekan Batang kalilorems
                </h1>
              </div>
              <div className="">
                <Radio />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-end mt-[37px]">
          <button
            onClick={() => navigate("/save-place")}
            className="font-[700] text-[20px] leading-[24px] cursor-pointer hover:cursor-pointer text-[#CF2D39]"
          >
            + Add a new address
          </button>
        </div>
      </div>
      <div>
        <div className="mt-[25px]">
          <h1 className="font-[700] text-[18px] leading-[21.6px]">
            Which item should the driver pick up at this pickup location?{" "}
            <span className="text-[#CF2D39]">*</span>
          </h1>
          <h2 className="font-[400] text-[14px] leading-[18.9px] text-black/50 mt-[12px]">
            Select the items you added before that you want the driver to pick
            up at this location
          </h2>
        </div>
      </div>
      <div>
        <div className="border-[0.1px] border-black/20 rounded-md mt-[30px] p-4">
          <div className="grid md:grid-cols-5">
            <div>
              <img className="w-30" src={uploadImage} alt="upload label" />
            </div>
            <div className="col-span-3 pl-4">
              <div>
                <h1 className="font-[700] text-[20px] leading-[24px]">
                  Iphone 13
                </h1>
                <h2 className="font-[400] text-[14px] leading-[18.0px] mt-[10px]">
                  Item is insured
                </h2>
              </div>
              <div className="flex flex-row gap-8 mt-[18px]">
                <div>
                  <h1 className="font-[700] text-[14px] leading-[18.9px]">
                    Size
                  </h1>
                  <div className="flex flex-row gap-2">
                    <img
                      className="w-[16px] h-[16px]"
                      src={sizeLabel}
                      alt="size label"
                    />
                    <p className="font-[400] text-[14px] leading-[18.9px]">
                      Small
                    </p>
                  </div>
                </div>
                <div>
                  <h1 className="font-[700] text-[14px] leading-[18.9px]">
                    Weight
                  </h1>
                  <div className="flex flex-row gap-2">
                    <img
                      className="w-[16px] h-[16px]"
                      src={weightLabel}
                      alt="weight label"
                    />
                    <p className="font-[400] text-[14px] leading-[18.9px]">
                      2kg
                    </p>
                  </div>
                </div>
                <div>
                  <h1 className="font-[700] text-[14px] leading-[18.9px]">
                    Height
                  </h1>
                  <div className="flex flex-row gap-2">
                    <img
                      className="w-[16px] h-[16px]"
                      src={LWHLabel}
                      alt="height label"
                    />
                    <p className="font-[400] text-[14px] leading-[18.9px]">
                      10cm
                    </p>
                  </div>
                </div>
                <div>
                  <h1 className="font-[700] text-[14px] leading-[18.9px]">
                    Width
                  </h1>
                  <div className="flex flex-row gap-2">
                    <img
                      className="w-[16px] h-[16px]"
                      src={LWHLabel}
                      alt="width label"
                    />
                    <p className="font-[400] text-[14px] leading-[18.9px]">
                      15cm
                    </p>
                  </div>
                </div>
                <div>
                  <h1 className="font-[700] text-[14px] leading-[18.9px]">
                    Length
                  </h1>
                  <div className="flex flex-row gap-2">
                    <img
                      className="w-[16px] h-[16px]"
                      src={LWHLabel}
                      alt="length label"
                    />
                    <p className="font-[400] text-[14px] leading-[18.9px]">
                      30cm
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end w-full">
              <Radio />
            </div>
          </div>
        </div>
        <div className="border-[0.1px] border-black/20 rounded-md mt-[30px] p-4">
          <div className="grid md:grid-cols-5">
            <div>
              <img className="w-30" src={uploadImage} alt="upload label" />
            </div>
            <div className="col-span-3 pl-4">
              <div>
                <h1 className="font-[700] text-[20px] leading-[24px]">
                  Iphone 13
                </h1>
                <h2 className="font-[400] text-[14px] leading-[18.0px] mt-[10px]">
                  Item is insured
                </h2>
              </div>
              <div className="flex flex-row gap-8 mt-[18px]">
                <div>
                  <h1 className="font-[700] text-[14px] leading-[18.9px]">
                    Size
                  </h1>
                  <div className="flex flex-row gap-2">
                    <img
                      className="w-[16px] h-[16px]"
                      src={sizeLabel}
                      alt="size label"
                    />
                    <p className="font-[400] text-[14px] leading-[18.9px]">
                      Small
                    </p>
                  </div>
                </div>
                <div>
                  <h1 className="font-[700] text-[14px] leading-[18.9px]">
                    Weight
                  </h1>
                  <div className="flex flex-row gap-2">
                    <img
                      className="w-[16px] h-[16px]"
                      src={weightLabel}
                      alt="weight label"
                    />
                    <p className="font-[400] text-[14px] leading-[18.9px]">
                      2kg
                    </p>
                  </div>
                </div>
                <div>
                  <h1 className="font-[700] text-[14px] leading-[18.9px]">
                    Height
                  </h1>
                  <div className="flex flex-row gap-2">
                    <img
                      className="w-[16px] h-[16px]"
                      src={LWHLabel}
                      alt="height label"
                    />
                    <p className="font-[400] text-[14px] leading-[18.9px]">
                      10cm
                    </p>
                  </div>
                </div>
                <div>
                  <h1 className="font-[700] text-[14px] leading-[18.9px]">
                    Width
                  </h1>
                  <div className="flex flex-row gap-2">
                    <img
                      className="w-[16px] h-[16px]"
                      src={LWHLabel}
                      alt="width label"
                    />
                    <p className="font-[400] text-[14px] leading-[18.9px]">
                      15cm
                    </p>
                  </div>
                </div>
                <div>
                  <h1 className="font-[700] text-[14px] leading-[18.9px]">
                    Length
                  </h1>
                  <div className="flex flex-row gap-2">
                    <img
                      className="w-[16px] h-[16px]"
                      src={LWHLabel}
                      alt="length label"
                    />
                    <p className="font-[400] text-[14px] leading-[18.9px]">
                      30cm
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end w-full">
              <Radio />
            </div>
          </div>
        </div>
        <div className="border-[0.1px] border-black/20 rounded-md mt-[30px] p-4">
          <div className="grid md:grid-cols-5">
            <div>
              <img className="w-30" src={uploadImage} alt="upload label" />
            </div>
            <div className="col-span-3 pl-4">
              <div>
                <h1 className="font-[700] text-[20px] leading-[24px]">
                  Iphone 13
                </h1>
                <h2 className="font-[400] text-[14px] leading-[18.0px] mt-[10px]">
                  Item is insured
                </h2>
              </div>
              <div className="flex flex-row gap-8 mt-[18px]">
                <div>
                  <h1 className="font-[700] text-[14px] leading-[18.9px]">
                    Size
                  </h1>
                  <div className="flex flex-row gap-2">
                    <img
                      className="w-[16px] h-[16px]"
                      src={sizeLabel}
                      alt="size label"
                    />
                    <p className="font-[400] text-[14px] leading-[18.9px]">
                      Small
                    </p>
                  </div>
                </div>
                <div>
                  <h1 className="font-[700] text-[14px] leading-[18.9px]">
                    Weight
                  </h1>
                  <div className="flex flex-row gap-2">
                    <img
                      className="w-[16px] h-[16px]"
                      src={weightLabel}
                      alt="weight label"
                    />
                    <p className="font-[400] text-[14px] leading-[18.9px]">
                      2kg
                    </p>
                  </div>
                </div>
                <div>
                  <h1 className="font-[700] text-[14px] leading-[18.9px]">
                    Height
                  </h1>
                  <div className="flex flex-row gap-2">
                    <img
                      className="w-[16px] h-[16px]"
                      src={LWHLabel}
                      alt="height label"
                    />
                    <p className="font-[400] text-[14px] leading-[18.9px]">
                      10cm
                    </p>
                  </div>
                </div>
                <div>
                  <h1 className="font-[700] text-[14px] leading-[18.9px]">
                    Width
                  </h1>
                  <div className="flex flex-row gap-2">
                    <img
                      className="w-[16px] h-[16px]"
                      src={LWHLabel}
                      alt="width label"
                    />
                    <p className="font-[400] text-[14px] leading-[18.9px]">
                      15cm
                    </p>
                  </div>
                </div>
                <div>
                  <h1 className="font-[700] text-[14px] leading-[18.9px]">
                    Length
                  </h1>
                  <div className="flex flex-row gap-2">
                    <img
                      className="w-[16px] h-[16px]"
                      src={LWHLabel}
                      alt="length label"
                    />
                    <p className="font-[400] text-[14px] leading-[18.9px]">
                      30cm
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end w-full">
              <Radio />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1 className="font-[600] text-[20px] leading-[24px] mt-[30px]">
            Who is available for questions at pickup?{" "}
            <span className="text-[#CF2D39]">*</span>
          </h1>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="font-[400] text-[14px] leading-[16.8px] mt-[19px]">
              Full name or business name{" "}
              <span className="text-[#CF2D39]">*</span>
            </p>
            <Input
              style={{
                border: "1px solid black",
                outline: "none",
                padding: "6px",
              }}
              type="text"
              className="mt-[8px] w-full"
            />
          </div>
          <div>
            <p className="font-[400] text-[14px] leading-[16.8px] mt-[19px]">
              Mobile number <span className="text-[#CF2D39]">*</span>
            </p>
            <Input
              style={{
                border: "1px solid black",
                outline: "none",
                padding: "6px",
              }}
              type="number"
              className="mt-[8px] w-full"
            />
          </div>
          <div>
            <p className="font-[400] text-[14px] leading-[16.8px] mt-[19px]">
              Enter email
            </p>
            <Input
              style={{
                border: "1px solid black",
                outline: "none",
                padding: "6px",
              }}
              type="email"
              className="mt-[8px] w-full"
            />
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1 className="font-[600] text-[20px] leading-[24px] mt-[30px]">
            What does the driver need to know for pickup?
          </h1>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="font-[400] text-[14px] leading-[16.8px] mt-[19px]">
              Select any extra field
            </p>
            <select
              style={{
                border: "1px solid black",
                outline: "none",
                padding: "10px",
              }}
              id="select-select"
              type="text"
              className="mt-[8px] w-full"
              label="Select..."
            >
              <option>Select...</option>
              <option>option1</option>
              <option>option1</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-[700] text-[20px] leading-[27.24px] space-x-[1%] text-[#CF2D39] mt-[29px] mb-[10px] items-end text-end">
          Save pick up location
        </h1>
      </div>
    </div>
  );
};
