import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ImageSlider from "../components/misc/ImagSlider";
import TextComp from "../components/shared-components/TextComp";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../store/Reducer/AuthApi";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showHistory, setShowHistory] = useState(false);
  const { userProfileInfo } = useSelector((state) => state.auth_userData);
  const slides = [
    { url: require("../assets/images/home_banner.png"), title: "beach" },
    { url: require("../assets/images/home_banner.png"), title: "boat" },
  ];
  const containerStyles = {
    width: "100%",
    height: "158px",
    margin: "0 auto",
  };
  React.useEffect(() => {
    dispatch(getUserProfile());
  }, []);
  return (
    <div className="">
      {/* title --------------------------------------------------------------------- */}
      <TextComp variant="heading" className="mb-5">
        Good day, {userProfileInfo?.user?.userName}
      </TextComp>
      <div id="banner_section" className="w-full">
        <div id="banner" className="flex justify-center w-full">
          <img
            src={require("../assets/images/home_banner.png")}
            alt="banner"
            className="w-full"
          />
        </div>
      </div>

      {/* action button group -------------------------------------------------------- */}
      <div id="button_group" className="mt-10">
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
        >
          <button
            onClick={() => setShowHistory(!showHistory)}
            className=" relative border-[1px] bg-[rgba(207, 45, 57, 0.05)] border-[#CF2D39] hover:bg-[#CF2D39] hover:text-[#fff] transition-all ease-in-out duration-300 sm:text-center text-right sm:w-60 w-[6rem] p-2 sm:py-3 text-[#CF2D39] shadow-md sm:text-md text-xs font-[600]"
          >
            Create job
            <img
              className="absolute sm:top-[10px] sm:left-12 top-[6px] left-2"
              src={require("../assets/hompage_icons/create_job_icon.png")}
              alt=""
            />
          </button>
          <button
            onClick={() => navigate("/get-estimator")}
            className=" relative border-[1px] bg-[rgba(207, 45, 57, 0.05)] border-[#CF2D39] hover:bg-[#CF2D39] hover:text-[#fff] transition-all ease-in-out duration-300 sm:text-center text-right sm:w-60 w-[8rem] p-2 sm:py-3 text-[#CF2D39] shadow-md sm:text-md text-xs font-[600]"
          >
            Get an estimate
            <img
              className="absolute sm:top-[6px] sm:left-12 top-[2.6px] left-2"
              src={require("../assets/hompage_icons/estimate_icon.png")}
              alt=""
            />
          </button>
        </Stack>
      </div>

      {/* sub title --------------------------------------------------------------------- */}
      <TextComp variant="subTitle" className="mb-5 mt-8">
        Your active jobs
      </TextComp>

      {/* empty history------------------------------------------------------------------------ */}
      <div
        id="history"
        className="w-full flex justify-center items-center mt-8 mb-10"
        style={{
          boxShadow: "0px 1px 50px rgba(0, 0, 0, 0.12)",
          display: showHistory ? "none" : "block",
        }}
      >
        <div className="flex flex-col justify-center py-24">
          <img
            className="mt-10 block mx-auto sm:w-[10rem] w-[50%]"
            src={require("../assets/hompage_icons/no_history_icon.png")}
            alt=""
          />
          <div className="flex flex-col justify-around h-20 mt-8">
            <p className="text-[#000000] opacity-50 mx-auto">
              Your active jobs will be listed here
            </p>
            <button
              onClick={() => navigate("/create-job")}
              className="text-[#CF2D39]"
            >
              + Create a job
            </button>
          </div>
        </div>
      </div>

      {/* data history------------------------------------------------------------------------- */}
      <div
        id="with_data_history"
        className="w-full mt-8 lg:px-14 md:px-7 px-0  lg:py-10 md:py-7 :py-5 py-0 mb-10"
        style={{
          boxShadow: "0px 1px 50px rgba(0, 0, 0, 0.12)",
          display: showHistory ? "block" : "none",
        }}
      >
        {/* card1   */}
        <div
          className="w-full p-3"
          style={{
            border: "2px solid rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
          }}
        >
          <div className="w-full">
            <div className="w-full justify-between my-2 sm:flex hidden">
              <div className="text-[#000000] sm:font-[600] sm:text-md text-xs p-1 sm:px-3 px-0">
                iBBY01-806434794177
              </div>
              <div className="text-[#000000] font-[500] sm:text-md text-xs  p-1 sm:px-3 px-0 bg-[#E7EBEE]">
                AWAITING OFFERS
              </div>
            </div>
            <div className="w-full justify-between my-2 sm:hidden flex">
              <div className="text-[#000000] font-[600] sm:text-md text-xs p-1 sm:px-3 px-0">
                <div className="flex">
                  <img
                    className="block w-[1.5rem]"
                    src={require("../assets/hompage_icons/express_icon.png")}
                    alt=""
                  />
                  <span className="block pl-2">Express</span>
                </div>
              </div>
              <div className="text-[#000000] font-[500] sm:text-md text-xs  p-1 sm:px-3 px-0 bg-[#E7EBEE]">
                AWAITING OFFERS
              </div>
            </div>
            <div className="w-full justify-between my-2 sm:hidden flex">
              <div className="text-[#000000] font-[600] sm:text-md text-xs p-1 sm:px-3 px-0">
                iBBY01-806434794177
              </div>
              <div className="text-[#000000] font-[500] sm:text-md text-xs  p-1 sm:px-3 px-0 opacity-50">
                01/01/2022
              </div>
            </div>
            <div className="w-full justify-between px-3 my-4 sm:flex hidden">
              <div className="flex">
                <img
                  className="block w-[1.5rem]"
                  src={require("../assets/hompage_icons/express_icon.png")}
                  alt=""
                />
                <span className="block pl-2">Express</span>
              </div>

              <div className="flex">
                <img
                  className="block  w-[1.5rem]  h-[1.5rem]"
                  src={require("../assets/hompage_icons/goods_icon.png")}
                  alt=""
                />
                <span className="block pl-2">Goods</span>
              </div>
              <div className="flex">
                <img
                  className="block  w-[1.5rem]  h-[1.5rem]"
                  src={require("../assets/hompage_icons/items_icon.png")}
                  alt=""
                />
                <span className="block pl-2">3 Items</span>
              </div>
              <div className="flex">
                <img
                  className="block  w-[1.5rem]  h-[1.5rem]"
                  src={require("../assets/hompage_icons/status_icon.png")}
                  alt=""
                />
                <span className="block pl-2">Online</span>
              </div>
              <div className="flex">
                <img
                  className="block  w-[1.5rem]  h-[1.5rem]"
                  src={require("../assets/hompage_icons/date_icon.png")}
                  alt=""
                />
                <span className="block pl-2">01/01/2022</span>
              </div>
            </div>
            <div className="w-full justify-between my-4 sm:hidden flex">
              <div className="flex">
                <img
                  className="block  w-[1.5rem]  h-[1.5rem]"
                  src={require("../assets/hompage_icons/goods_icon.png")}
                  alt=""
                />
                <span className="block pl-2">Goods</span>
              </div>
              <div className="flex">
                <img
                  className="block  w-[1.5rem]  h-[1.5rem]"
                  src={require("../assets/hompage_icons/items_icon.png")}
                  alt=""
                />
                <span className="block pl-2">3 Items</span>
              </div>
              <div className="flex">
                <img
                  className="block  w-[1.5rem]  h-[1.5rem]"
                  src={require("../assets/hompage_icons/status_icon.png")}
                  alt=""
                />
                <span className="block pl-2">Online</span>
              </div>
            </div>
            <div className="sm:pl-2">
              <div className="flex mt-[30px]">
                <img
                  className="w-[2.2rem] mt-1"
                  src={require("../assets/hompage_icons/stepper_icon.png")}
                  alt=""
                />
                <div className="ml-2">
                  <div>
                    <p className="font-[600]">Kuching</p>
                    <span className="block sm:text-sm text-xs opacity-50">
                      Pusat Penjaja P/Kalan Ban Hock Lbh Java
                    </span>
                  </div>
                  <div className="mt-7">
                    <p className="font-[600]">Ipoh</p>
                    <span className="block sm:text-sm text-xs opacity-50">
                      131-133 Jalan Raja Musa Aziz
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* card2   */}
        <div
          className="w-full p-3 mt-8"
          style={{
            border: "2px solid rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
          }}
        >
          <div className="w-full">
            <div className="w-full justify-between my-2 sm:flex hidden">
              <div className="text-[#000000] sm:font-[600] sm:text-md text-xs p-1 sm:px-3 px-0">
                iBBY01-806434794177
              </div>
              <div className="text-[#B12D00] font-[500] sm:text-md text-xs  p-1 sm:px-3 px-0 bg-[#FDE5C0]">
                DELIVERY IN PROGRESS
              </div>
            </div>
            <div className="w-full justify-between my-2 sm:hidden flex">
              <div className="text-[#000000] font-[600] sm:text-md text-xs p-1 sm:px-3 px-0">
                <div className="flex">
                  <img
                    className="block w-[1.5rem]"
                    src={require("../assets/hompage_icons/express_icon.png")}
                    alt=""
                  />
                  <span className="block pl-2">Express</span>
                </div>
              </div>
              <div className="text-[#B12D00] font-[500] sm:text-md text-xs  p-1 sm:px-3 px-0 bg-[#FDE5C0]">
                DELIVERY IN PROGRESS
              </div>
            </div>
            <div className="w-full justify-between my-2 sm:hidden flex">
              <div className="text-[#000000] font-[600] sm:text-md text-xs p-1 sm:px-3 px-0">
                iBBY01-806434794177
              </div>
              <div className="text-[#000000] font-[500] sm:text-md text-xs  p-1 sm:px-3 px-0 opacity-50">
                01/01/2022
              </div>
            </div>
            <div className="w-full justify-between px-3 my-4 sm:flex hidden">
              <div className="flex">
                <img
                  className="block w-[1.5rem]"
                  src={require("../assets/hompage_icons/express_icon.png")}
                  alt=""
                />
                <span className="block pl-2">Express</span>
              </div>

              <div className="flex">
                <img
                  className="block  w-[1.5rem]  h-[1.5rem]"
                  src={require("../assets/hompage_icons/goods_icon.png")}
                  alt=""
                />
                <span className="block pl-2">Goods</span>
              </div>
              <div className="flex">
                <img
                  className="block  w-[1.5rem]  h-[1.5rem]"
                  src={require("../assets/hompage_icons/items_icon.png")}
                  alt=""
                />
                <span className="block pl-2">3 Items</span>
              </div>
              <div className="flex">
                <img
                  className="block  w-[1.5rem]  h-[1.5rem]"
                  src={require("../assets/hompage_icons/status_icon.png")}
                  alt=""
                />
                <span className="block pl-2">Online</span>
              </div>
              <div className="flex">
                <img
                  className="block  w-[1.5rem]  h-[1.5rem]"
                  src={require("../assets/hompage_icons/date_icon.png")}
                  alt=""
                />
                <span className="block pl-2">01/01/2022</span>
              </div>
            </div>
            <div className="w-full justify-between my-4 sm:hidden flex">
              <div className="flex">
                <img
                  className="block  w-[1.5rem]  h-[1.5rem]"
                  src={require("../assets/hompage_icons/goods_icon.png")}
                  alt=""
                />
                <span className="block pl-2">Goods</span>
              </div>
              <div className="flex">
                <img
                  className="block  w-[1.5rem]  h-[1.5rem]"
                  src={require("../assets/hompage_icons/items_icon.png")}
                  alt=""
                />
                <span className="block pl-2">3 Items</span>
              </div>
              <div className="flex">
                <img
                  className="block  w-[1.5rem]  h-[1.5rem]"
                  src={require("../assets/hompage_icons/status_icon.png")}
                  alt=""
                />
                <span className="block pl-2">Online</span>
              </div>
            </div>
            <div className="sm:pl-2">
              <div className="flex mt-[30px]">
                <img
                  className="w-[2.5rem] mt-1"
                  src={require("../assets/hompage_icons/stepper_icon.png")}
                  alt=""
                />
                <div className="ml-2">
                  <div>
                    <p className="font-[600]">Kuching</p>
                    <span className="block sm:text-sm text-xs opacity-50">
                      Pusat Penjaja P/Kalan Ban Hock Lbh Java
                    </span>
                  </div>
                  <div className="mt-7">
                    <p className="font-[600]">Ipoh</p>
                    <span className="block sm:text-sm text-xs opacity-50">
                      131-133 Jalan Raja Musa Aziz
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
