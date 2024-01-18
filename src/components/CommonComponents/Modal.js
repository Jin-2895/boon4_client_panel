import { Input, Radio } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { showMessage } from "../../store/shared_stateSlice";
import { UI_API } from "../../services/constant";

export default function Modal({
  filterType,
  handleChange,
  checkBoxValue,
  boxesList,
  setCheckBoxValue,
}) {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = React.useState(false);
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
      setShowModal(false);
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
      setShowModal(false);
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
      setShowModal(false);
    }
  };
  return (
    <>
      <button
        className="border-[0.1px] border-black/20 rounded-md p-4"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <div className="flex flex-row gap-2 justify-between items-center">
          <div className="flex flex-col text-start">
            <h1 className="font-[700] text-[18px] capitalize">Select custom</h1>
            <div className="font-[400] text-[16px] leading-[19.2px] text-black/50 mt-[10px] text-start">
              <p>Only weight or dimension</p>
              <p className="mt-1">Both</p>
            </div>
          </div>
          <div className="flex justify-end">
            <Radio
              checked={checkBoxValue === "011"}
              onChange={handleChange}
              value="011"
              name="radio-buttons"
              inputProps={{ "aria-label": "Small" }}
            />
          </div>
        </div>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[50rem] my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Select Custom</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-4 flex-auto">
                  <p className="mb-4 text-black font-[400] text-[18px] leading-relaxed">
                    Select from the following and we will let you know which
                    category best suits your delivery size
                  </p>
                  <div className="grid grid-cols-3 gap-4">
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
                  <div className="mt-4 grid grid-cols-3 gap-4 border-t border-solid border-slate-200">
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
                        <div className="absolute top-10 right-4 bg-white">
                          kg
                        </div>
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
                          <div className="absolute top-10 right-4 bg-white">
                            cm
                          </div>
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
                          <div className="absolute top-10 right-4 bg-white">
                            cm
                          </div>
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
                          <div className="absolute top-10 right-4 bg-white">
                            cm
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-[#CF2D39] text-white active:bg-[#b1252f] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleCheck()}
                  >
                    Check
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
