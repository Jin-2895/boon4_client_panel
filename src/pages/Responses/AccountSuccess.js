import React from "react";
import { getUserProfile } from "../../store/Reducer/AuthApi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import login_image from "../../assets/images/login-image.png";

export const AccountSuccess = () => {
  const { userProfileInfo } = useSelector((state) => state.auth_userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getUserProfile());
  }, []);
  const headNext = () => {
    // navigate({ nextPage });
    navigate("/");
  };
  return (
    <div className="flex w-[100%]">
      <div className="flex flex-col h-[100vh] w-[100%] lg:w-[50%] justify-center items-center gap-10">
        <div>
          <img
            className="w-[15rem]"
            src={require("../../assets/images/complete.png")}
            alt="complete"
          />
        </div>
        <div className="text-center font-[700] text-[24px] leading-[1px]">
          <h1>Congrats {userProfileInfo?.user?.userName}!</h1>
        </div>
        <div className="text-center font-[700] text-[24px] leading-[1px]">
          <h1>You've send us your business docs images.</h1>
        </div>
        <div className="text-center font-[400] text-[18px] leading-[26.1px] text-black opacity-50">
          <h1>
            Boon4 admin team will verify your business docs and let you know.
          </h1>
        </div>
        <div>
          <button
            className="bg-[#CF2D39] shadow-lg text-white px-[8rem] py-4 font-[600] text-[18px] leading-[24px] "
            onClick={headNext}
          >
            Proceed
          </button>
        </div>
      </div>
      {/* side two  */}
      <div className="hidden lg:flex lg:w-[50%] xl:w-[50%] 2xl-[40%] justify-end">
        <img src={login_image} alt="" className="w-[85%] h-[100vh]" />
      </div>
    </div>
  );
};
