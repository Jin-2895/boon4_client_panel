import React from "react";
import { getUserProfile } from "../../store/Reducer/AuthApi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import login_image from "../../assets/images/login-image.png";
import SideTwo from "../../components/CommonComponents/SideTwo";

export const PasswordReset = () => {
  const { userProfileInfo } = useSelector((state) => state.auth_userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getUserProfile());
  }, []);
  const headNext = () => {
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
          <h1>Your password has reset succesfully.</h1>
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
      <SideTwo />
    </div>
  );
};
