import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import bellIcon from "../../assets/images/bell_icon.png";
import Header from "../CommonComponents/Drawer/Header";
import Drawer from "../CommonComponents/Drawer/Drawer";
import SideBar from "../CommonComponents/SideBar";
import ScrollTop from "../CommonComponents/ScrollTop";
import { getUserProfile } from "../../store/Reducer/AuthApi";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { userProfileInfo } = useSelector((state) => state.auth_userData);
  const { userUpdateProfile } = useSelector((state) => state.auth_userData);
  const profileImage = userProfileInfo?.user?.profilePicture;
  const accountVerified = userProfileInfo?.user?.myKardDocumentStatus;
  // const matches = useMediaQuery("(max-width:968px)");
  const location = useLocation();
  const pathname = location?.pathname;
  const dispatch = useDispatch();
  let render = React.useCallback(() => {
    const path =
      pathname === "/login" ||
      pathname === "/signup" ||
      pathname === "/resend-email" ||
      pathname === "/forgot-password" ||
      pathname === "/verify-otp" ||
      pathname.startsWith("/reset-password") ||
      pathname === "/terms-conditions" ||
      pathname === "/business-verification" ||
      pathname === "/account-verified" ||
      pathname === "/pass-reset-success"
        ? true
        : false;
    // if (!path) {
    //   document.body.style.backgroundColor = "#EDEDED";
    // }
    return path;
  });

  useEffect(() => {
    dispatch(getUserProfile());
  }, [userUpdateProfile]);

  useEffect(() => {
    if (!render) {
      document.body.style.backgroundColor = "F8F9F9";
    }
  }, [render]);

  return (
    <>
      {render() ? (
        children
      ) : (
        <>
          <div className="">
            <div className="hidden fixed overflow-hidden z-50 left-0 top-0 h-screen lg:block bg-white drop-shadow-right">
              <SideBar pathname={pathname} />
            </div>
            <div>
              <div className="w-full h-full">
                <div className="fixed overflow-hidden z-50 lg:hidden bg-white top-2 left-2">
                  <Header setIsOpen={setIsOpen} />
                  <Drawer
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    pathname={pathname}
                  />
                </div>
                <div className="flex drop-shadow-down fixed z-40 top-0 overflow-hidden bg-white w-full py-1 md:py-2 lg:py-3 xl:py-2 2xl:py-1 flex-row-reverse">
                  <div className="flex justify-center md:mx-[2rem] lg:mx-[2rem] xl:mx-[10rem] 2xl:mx-[18rem] sm:mx-20 xs:mx-5 mx-1">
                    <div className="flex relative flex-row items-center justify-center gap-1 md:gap-6 lg:gap-8">
                      {/* <BellIcon /> */}
                      <img width={35} src={bellIcon} alt="bell icon" />
                      <button>
                        {profileImage ? (
                          <img
                            alt="user profile"
                            src={profileImage}
                            className="m-3 w-[2.2rem] h-[2.2rem] rounded-full object-cover"
                          />
                        ) : (
                          <svg
                            width="2.2rem"
                            height="2.2rem"
                            viewBox="0 0 50 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M25 0C11.25 0 0 11.25 0 25C0 38.75 11.25 50 25 50C38.75 50 50 38.75 50 25C50 11.25 38.75 0 25 0ZM25 7.5C29.25 7.5 32.5 10.75 32.5 15C32.5 19.25 29.25 22.5 25 22.5C20.75 22.5 17.5 19.25 17.5 15C17.5 10.75 20.75 7.5 25 7.5ZM25 43C18.75 43 13.25 39.7501 10 35C10 30 20 27.25 25 27.25C30 27.25 40 30 40 35C36.75 39.75 31.25 43 25 43Z"
                              fill="black"
                              fillOpacity="0.2"
                            />
                          </svg>
                        )}
                      </button>
                      {accountVerified === "verified" ? (
                        <div className="absolute right-2 bottom-2">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 37 37"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="18.5" cy="18.5" r="18.5" fill="white" />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18.5109 35.5204C18.4628 35.5204 18.4366 35.5204 18.3885 35.4942C10.6568 33.322 5.65234 28.2432 5.65234 22.6094V10.2054C5.65234 9.9781 5.80532 9.80327 6.03259 9.77705C7.5973 9.54977 9.79576 8.89417 12.0947 7.95884C14.8002 6.87054 17.1997 5.5331 18.2093 4.57155C18.3885 4.39672 18.6639 4.39672 18.8169 4.57155C19.8265 5.55933 22.226 6.87054 24.9052 7.95884C27.2042 8.89417 29.4027 9.57599 30.9674 9.77705C31.1947 9.80327 31.3476 10.0043 31.3476 10.2054V22.6094C31.3476 28.2432 26.3694 33.2957 18.6377 35.4942C18.5896 35.5204 18.5634 35.5204 18.5109 35.5204Z"
                              fill="#5FD3AE"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18.511 32.4649C18.463 32.4649 18.4367 32.4649 18.3887 32.4387C12.1735 30.6948 8.17871 26.6257 8.17871 22.0801V12.1761C8.17871 11.9489 8.33169 11.774 8.55896 11.7478C9.76964 11.5948 11.5136 11.066 13.358 10.3055C15.5084 9.44883 17.4009 8.38675 18.2095 7.63062C18.3887 7.45142 18.664 7.47764 18.817 7.63062C19.5993 8.38675 21.4962 9.4226 23.6422 10.3055C25.4867 11.066 27.2306 11.5948 28.4412 11.7478C28.6685 11.774 28.8215 11.9751 28.8215 12.1761V22.0801C28.8215 26.6257 24.8311 30.6685 18.6159 32.4387C18.5897 32.4649 18.5635 32.4649 18.511 32.4649Z"
                              fill="#A1E5CF"
                            />
                          </svg>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
              <main
                className={
                  "flex flex-row justify-center -z-20 min-h-[100vh] max-h-[300vh] w-full" +
                  (pathname === "/" ? " bg-[#fff]" : " bg-[#F8F9F9]")
                }
              >
                <ScrollTop />
                <div className="relative hidden lg:block w-screen min-w-[267px] max-w-[268px] h-screen"></div>
                <div className="md:mx-[2rem] md:my-[6rem] lg:mx-[2rem] xl:mx-[10rem] 2xl:mx-[18rem] sm:mx-20 xs:mx-5 mx-2 mt-[6rem] md:mt-[7rem] xl:mt-[8rem] 2xl:mt-[9rem] w-full">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Layout;
