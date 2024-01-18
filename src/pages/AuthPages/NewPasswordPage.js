import login_image from "../../assets/images/login-image.png";
import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showMessage } from "../../store/shared_stateSlice";
import { changePassword } from "../../store/Reducer/AuthApi";
import SideTwo from "../../components/CommonComponents/SideTwo";

const NewPasswordPage = () => {
  // const [loader, setLoader] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [error, setError] = useState(false);
  const { newPassData } = useSelector((state) => state.shared_state);
  const { userLoading } = useSelector((state) => state.auth_userData);
  console.log(newPassData);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (password !== confirmPassword) {
      dispatch(showMessage("Both password should be same"));
    } else {
      if (password && confirmPassword) {
        setAuthLoading(userLoading);
        setError(null);
        let _data = {
          email: newPassData?.email,
          newPassword: password,
          path: "/pass_reset_success",
          navigate,
        };
        dispatch(changePassword(_data));
        setAuthLoading(userLoading);
      } else {
        setError("Enter email address");
        setAuthLoading(userLoading);
      }
    }
  };

  return (
    <div className="flex w-[100%]">
      {/* side one  */}
      <div className="flex w-[100%] lg:w-[50%] flex-col justify-center items-center">
        {" "}
        {/* otp container  */}
        <form
          onSubmit={submit}
          className="flex flex-col justify-center mt-4 h-full w-[20rem]"
        >
          <div id="otp" className="">
            <h1 className="leading-[135%] mb-2 text-lg font-bold">
              Forgot Password
            </h1>
            <p className="text-[grey] text-sm leading-[135%]">
              Please enter your new password
            </p>
          </div>
          <div id="Email" className="mt-5 ">
            <p className="">New Password</p>
            <input
              type="password"
              name="password"
              min={8}
              max={20}
              className="w-full p-2 mt-2"
              style={{
                border: "1px solid black",
                outline: "none",
              }}
            />
          </div>
          <div id="Email" className="mt-5">
            <p className="">Confirm Password</p>
            <input
              type="password"
              name="confirmPassword"
              min={8}
              max={20}
              className="w-full p-2 mt-2"
              style={{
                border: "1px solid black",
                outline: "none",
              }}
            />
          </div>
          <div className="text-red mt-2">{error}</div>
          <div id="Buttons" className="mt-5">
            <button
              type="submit"
              className={`${
                authLoading
                  ? "bg-[#dad3d3] hover:bg-[#dad3d3]"
                  : "bg-[#CF2D39] hover:bg-[#b0242f]"
              } relative shadow-md w-full p-2 text-white `}
            >
              Reset Password
              {authLoading && (
                <div className="absolute top-[30%] left-[47%]">
                  <CircularProgress size={"20px"} />
                </div>
              )}
            </button>
          </div>
        </form>
      </div>
      {/* side two  */}
      <SideTwo />
    </div>
  );
};

export default NewPasswordPage;
