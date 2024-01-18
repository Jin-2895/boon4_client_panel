import login_image from "../../assets/images/login-image.png";
import React from "react";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { sendOtp } from "../../store/Reducer/AuthApi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Alert from "@mui/material/Alert";
import SideTwo from "../../components/CommonComponents/SideTwo";

const ResendEmail = () => {
  const [authLoading, setAuthLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signupData } = useSelector((state) => state.shared_state);
  console.log(signupData);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  React.useEffect(() => {
    if (!signupData) {
      navigate(-1);
    }
  }, []);
  const onSubmit = (data) => {
    setAuthLoading(true);
    if (data) {
      if (signupData.isBusiness === true) {
        let _data = {
          checkUser: true,
          email: data.newEmail,
          password: signupData?.password,
          phone: signupData?.phone,
          terms_conditions: signupData?.terms_conditions,
          userName: signupData?.userName,
          isBusiness: signupData?.isBusiness,
          navigate,
        };
        dispatch(sendOtp(_data));
        setAuthLoading(false);
      } else {
        let _data = {
          checkUser: true,
          email: data.newEmail,
          password: signupData?.password,
          phone: signupData?.phone,
          terms_conditions: signupData?.terms_conditions,
          userName: signupData?.userName,
          navigate,
        };
        dispatch(sendOtp(_data));
        setAuthLoading(false);
      }
    } else {
      setAuthLoading(false);
    }
  };
  return (
    <div className="flex w-[100%]">
      {/* side one  */}
      <div className="flex w-[100%] lg:w-[50%] flex-col justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center mt-4 h-full w-[20rem]"
        >
          <div id="otp" className="">
            <h1 className="leading-[135%] mb-2 text-lg font-bold">
              Enter Your Email
            </h1>
            <p className="text-[grey] text-sm leading-[135%]">
              Please enter your email. We will send you a code.
            </p>
          </div>
          <div id="Email" className="mt-5">
            <p className="">Email Address</p>
            <input
              type="email"
              id="newEmail"
              {...register("newEmail", {
                required: "required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message:
                    "Entered value does not match email format someone@example.com",
                },
              })}
              className="w-full p-2"
              style={{
                border: "1px solid black",
                outline: "none",
              }}
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={() => (
                <Alert severity="error">{errors.email?.message}</Alert>
              )}
            />
          </div>
          <div id="Buttons" className="mt-5">
            <button
              type="submit"
              className={`${
                authLoading
                  ? "bg-[#dad3d3] hover:bg-[#dad3d3]"
                  : "bg-[#CF2D39] hover:bg-[#b0242f]"
              } relative shadow-md w-full p-2 text-white `}
            >
              Change Email
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

export default ResendEmail;
