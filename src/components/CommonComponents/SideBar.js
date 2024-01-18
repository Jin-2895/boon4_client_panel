import React from "react";
import boon4Logo2 from "../../assets/svg/boon4logo2.svg";
import { sidebarRoutes1, sidebarRoutes2 } from "../misc/sidebarRoutes";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/Slicer/AuthApiSlice";
import { useDispatch } from "react-redux";

const SideBar = ({ pathname }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <section>
      <article className="relative w-screen max-w-[268px] h-screen flex flex-col justify-between">
        <div>
          <header className="mx-auto my-6 flex justify-center">
            <button onClick={() => navigate("/")}>
              <img src={boon4Logo2} alt="boon4 logo" />
            </button>
          </header>
          {sidebarRoutes1.map((item) => {
            return (
              <div
                key={item.id + 1}
                className={
                  item.route === pathname ? "transition-all ease-in-out" : ""
                }
              >
                <button
                  onClick={() => navigate(item.route)}
                  className={
                    "transition-all flex flex-row gap-4 ease-in-out duration-300 px-8 py-4 text-[19px] xl:text-[18px] 2xl:text-[17px] leading-[24px] mb-1 mt-1" +
                    (item.route === pathname
                      ? "active:text-[#CF2D39] focus:text-[#CF2D39] text-[#CF2D39] lg:font-[700] xl:font-[600] text-start w-full transition ease-in-out duration-200"
                      : "text-black bg-white tracking-[0.01rem] text-start font-[400] w-full transition ease-in-out duration-200")
                  }
                >
                  <div>
                    <img
                      src={item.route === pathname ? item.active : item.icon}
                      alt={item.name}
                    />
                  </div>
                  {item.title}
                </button>
              </div>
            );
          })}
        </div>
        <div>
          {sidebarRoutes2.map((item) => {
            return (
              <div key={item.id + 1}>
                <button
                  onClick={() => {
                    if (item.route === "/logout") {
                      dispatch(logout());
                    } else {
                      navigate(item.route);
                    }
                  }}
                  className={
                    "transition-all flex flex-row gap-4 ease-in-out duration-300 px-8 py-4 text-[19px] xl:text-[18px] 2xl:text-[17px] leading-[24px] mb-1 mt-1" +
                    (item.route === pathname
                      ? "active:text-[#CF2D39] focus:text-[#CF2D39] text-[#CF2D39] lg:font-[700] xl:font-[600] text-start w-full transition ease-in-out duration-200"
                      : "text-black bg-white tracking-[0.01rem] text-start font-[400] w-full transition ease-in-out duration-200")
                  }
                >
                  <div>
                    <img
                      src={item.route === pathname ? item.active : item.icon}
                      alt={item.name}
                    />
                  </div>
                  {item.title}
                </button>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default SideBar;
