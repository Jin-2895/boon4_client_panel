import React from "react";
import boon4Logo from "../../../assets/svg/boon4logo.svg";
import { sidebarRoutes1, sidebarRoutes2 } from "../../misc/sidebarRoutes";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../store/Slicer/AuthApiSlice";
import { ReactComponent as CancelIcon } from "../../../assets/svg/cancel.svg";
import { useDispatch } from "react-redux";

export default function MobileDrawer({ isOpen, setIsOpen, pathname }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div
      className={
        "fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 " +
        (isOpen
          ? " transition-opacity transform opacity-100 duration-500 ease-in-out -translate-x-0"
          : " transition-opacity transform duration-500 opacity-0 ease-in-out -translate-x-full")
      }
    >
      <section
        className={
          "w-screen max-w-lg md:max-w-[268px] left-0 absolute bg-white h-screen shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " -translate-x-0 " : " -translate-x-full ")
        }
      >
        <article className="relative w-screen h-full max-w-lg md:max-w-[268px] flex flex-col space-y-6">
          <header className="p-4 font-bold text-lg flex justify-between">
            <button
              className="cursor-pointer"
              onClick={() => navigate("/", setIsOpen(false))}
            >
              <img src={boon4Logo} alt="boon4 logo" />
            </button>
            <button className="cursor-pointer" onClick={() => setIsOpen(false)}>
              <CancelIcon />
            </button>
          </header>
          <div className="flex flex-col justify-between h-screen">
            <div>
              {sidebarRoutes1.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={
                      item.route === pathname
                        ? "transition-all ease-in-out"
                        : ""
                    }
                  >
                    <button
                      onClick={() => navigate(item.route, setIsOpen(false))}
                      className={
                        "transition-all flex flex-row gap-4 ease-in-out duration-300 px-8 py-4 font-[700] text-[20px] leading-[24px] mb-1 mt-1" +
                        (item.route === pathname
                          ? "active:text-[#CF2D39] focus:text-[#CF2D39] text-[#CF2D39] font-[700] text-start w-full transition ease-in-out duration-200"
                          : "text-black bg-white text-start font-[400] w-full transition ease-in-out duration-200")
                      }
                    >
                      <div>
                        <img
                          src={
                            item.route === pathname ? item.active : item.icon
                          }
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
                  <div key={item.id}>
                    <button
                      onClick={() => {
                        if (item.route === "/logout") {
                          dispatch(logout());
                        } else {
                          navigate(item.route, setIsOpen(false));
                        }
                      }}
                      className={
                        "transition-all flex flex-row gap-4 ease-in-out duration-300 px-8 py-4 font-[700] text-[20px] leading-[24px] mb-1 mt-1" +
                        (item.route === pathname
                          ? "active:text-[#CF2D39] focus:text-[#CF2D39] text-[#CF2D39] font-[700] text-start w-full transition ease-in-out delay-100 hover:-translate-x-0 hover:scale-110 duration-200"
                          : "text-black bg-white text-start font-[400] w-full transition ease-in-out delay-100 hover:-translate-x-0 duration-200")
                      }
                    >
                      <div>
                        <img
                          src={
                            item.route === pathname ? item.active : item.icon
                          }
                          alt={item.name}
                        />
                      </div>
                      {item.title}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </article>
      </section>
      <section
        className="w-screen h-full cursor-pointer"
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </div>
  );
}
