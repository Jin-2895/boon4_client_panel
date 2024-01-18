import { Input, Radio } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { showMessage } from "../../store/shared_stateSlice";
import { UI_API } from "../../services/constant";

const CustomSize = ({
  filterType,
  handleChange,
  checkBoxValue,
  boxesList,
  setCheckBoxValue,
}) => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [length, setLength] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [width, setWidth] = React.useState("");
  const handleCheck = () => {
    if (value === "") {
      dispatch(showMessage("Please select any of the 3"));
    }
    if (value === "1") {
      let _object = {
        id: 1,
        weight,
      };
      const packageSize = UI_API._findCustomPackageSize(_object, boxesList).id;
      setCheckBoxValue(packageSize);
    }
    if (value === "2") {
      let _object = {
        id: 2,
        length,
        height,
        width,
      };
      const packageSize = UI_API._findCustomPackageSize(_object, boxesList).id;
      setCheckBoxValue(packageSize);
    }
    if (value === "3") {
      let _object = {
        id: 3,
        weight,
        length,
        height,
        width,
      };
      const packageSize = UI_API._findCustomPackageSize(_object, boxesList).id;
      setCheckBoxValue(packageSize);
    }
  };
  return (
    <>
      <div className="relative flex-auto">
        <h1 className="font-[700] text-[18px] capitalize mt-[2rem]">
          Or provide us with your own package size
        </h1>
        <p className="opacity-50">
          Select weight or dimensions or you can select both as well.
        </p>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 mt-[2rem]">
          <div
            className={
              value === "1"
                ? "flex flex-row justify-between border-[0.1rem] border-[#CF2D39] text-[#CF2D39] rounded-lg transition-all ease-in-out duration-300 px-2 py-1 text-center items-center"
                : "flex flex-row justify-between border-[0.1rem] hover:border-[#CF2D39] hover:text-[#CF2D39] transition-all ease-in-out duration-300 rounded-lg px-2 py-1 text-center items-center"
            }
          >
            <p
              className={
                value === "1"
                  ? "font-[500] text-[#CF2D39] text-[18px] leading-[18px]"
                  : "font-[500] text-[18px] leading-[18px]"
              }
            >
              Only weight
            </p>
            <Radio
              checked={value === "1"}
              onChange={(e) => setValue(e.target.value)}
              value="1"
              name="radio-buttons"
            />
          </div>
          <div
            className={
              value === "2"
                ? "flex flex-row justify-between border-[0.1rem] border-[#CF2D39] text-[#CF2D39] rounded-lg transition-all ease-in-out duration-300 px-2 py-1 text-center items-center"
                : "flex flex-row justify-between border-[0.1rem] hover:border-[#CF2D39] hover:text-[#CF2D39] transition-all ease-in-out duration-300 rounded-lg px-2 py-1 text-center items-center"
            }
          >
            <p
              className={
                value === "2"
                  ? "font-[500] text-[#CF2D39] text-[18px] leading-[18px]"
                  : "font-[500] text-[18px] leading-[18px]"
              }
            >
              Only dimensions
            </p>
            <Radio
              checked={value === "2"}
              onChange={(e) => setValue(e.target.value)}
              value="2"
              name="radio-buttons"
            />
          </div>
          <div
            className={
              value === "3"
                ? "flex flex-row justify-between border-[0.1rem] border-[#CF2D39] text-[#CF2D39] rounded-lg transition-all ease-in-out duration-300 px-2 py-1 text-center items-center"
                : "flex flex-row justify-between border-[0.1rem] hover:border-[#CF2D39] hover:text-[#CF2D39] transition-all ease-in-out duration-300 rounded-lg px-2 py-1 text-center items-center"
            }
          >
            <p
              className={
                value === "3"
                  ? "font-[500] text-[#CF2D39] text-[18px] leading-[18px]"
                  : "font-[500] text-[18px] leading-[18px]"
              }
            >
              Both
            </p>
            <Radio
              checked={value === "3"}
              onChange={(e) => setValue(e.target.value)}
              value="3"
              name="radio-buttons"
            />
          </div>
        </div>
        {/* ****** */}
        {/* Weight & Dimensions */}
        {/* ****** */}
        <div className="flex flex-col mt-4 md:grid md:grid-cols-3 md:gap-4">
          {(value === "3" || value === "1") && (
            <div className="mt-4 relative">
              <p className="font-[500] px-1 text-[18px] leading-[18px]">
                Insert Weight KG •
              </p>
              <Input
                type="number"
                name="weight"
                onChange={(e) => setWeight(e.target.value)}
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.2)",
                  //   borderRadius: "10px",
                  marginTop: "10px",
                  padding: "6px",
                  width: "100%",
                }}
              />
              <div className="absolute top-10 right-4 bg-white">kg</div>
            </div>
          )}
          {(value === "3" || value === "2") && (
            <>
              <div className="mt-4 relative">
                <p className="font-[500] px-1 text-[18px] leading-[18px]">
                  Insert Length •
                </p>
                <Input
                  type="number"
                  name="length"
                  onChange={(e) => setLength(e.target.value)}
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.2)",
                    //   borderRadius: "10px",
                    marginTop: "10px",
                    padding: "6px",
                    width: "100%",
                  }}
                />
                <div className="absolute top-10 right-4 bg-white">cm</div>
              </div>
              <div className="mt-4 relative">
                <p className="font-[500] px-1 text-[18px] leading-[18px]">
                  Insert Width •
                </p>
                <Input
                  type="number"
                  name="width"
                  onChange={(e) => setWidth(e.target.value)}
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.2)",
                    //   borderRadius: "10px",
                    marginTop: "10px",
                    padding: "6px",
                    width: "100%",
                  }}
                />
                <div className="absolute top-10 right-4 bg-white">cm</div>
              </div>
              <div className="mt-4 relative">
                <p className="font-[500] px-1 text-[18px] leading-[18px]">
                  Insert Height •
                </p>
                <Input
                  type="number"
                  name="height"
                  onChange={(e) => setHeight(e.target.value)}
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.2)",
                    //   borderRadius: "10px",
                    marginTop: "10px",
                    padding: "6px",
                    width: "100%",
                  }}
                />
                <div className="absolute top-10 right-4 bg-white">cm</div>
              </div>
            </>
          )}
        </div>
        {!checkBoxValue && value && (
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b mt-[2rem]">
            <button
              className="bg-[#CF2D39] text-white active:bg-[#b1252f] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => handleCheck()}
            >
              Check
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CustomSize;
