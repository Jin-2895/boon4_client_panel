import login_image from "../../assets/images/login-image.png";
import React, { useEffect } from "react";
import { useState } from "react";
import { sendOtp, Signup, verifyOtp } from "../../store/Reducer/AuthApi";
import CircularProgress from "@mui/material/CircularProgress";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showMessage } from "../../store/shared_stateSlice";
import { savedSignupData } from "../../store/shared_stateSlice";
import SideTwo from "../../components/CommonComponents/SideTwo";

const OtpPage = () => {
  const [loader, setLoader] = useState(false);
  const [OTP, setOTP] = useState("");
  const [timeInterval, setTimeInterval] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userOtp } = useSelector((state) => state.auth_userData);
  const { signupData } = useSelector((state) => state.shared_state);
  const { forgetPassData } = useSelector((state) => state.shared_state);
  /* Checking the length of the OTP and if it is 6 then it is checking if the otp and signupData is
present or not. If it is present then it is checking if the OTP is equal to the otp. If it is equal
then it is checking if the isBusiness is true or not. If it is true then it is calling the
signupUser function. If the signupUser function is successful then it is calling the dispatch
function and navigate function. If the signupUser function is not successful then it is calling the
dispatch function and setError function. If the isBusiness is not true then it is calling the
signupUser function. If the signupUser function is successful then it is calling the dispatch
function and navigate function. If the signupUser function is not successful then it is calling the
dispatch function and setError function. If the OTP is not equal to the otp then it is calling the
dispatch function and setError function. If the otp and signupData is not present then it is calling
the verifyOtp function. If the verifyOtp function is successful then it is calling the console.log
function, */
  useEffect(() => {
    if (!userOtp && !signupData && !forgetPassData) {
      navigate(-1);
    }
    if (OTP.length === 6) {
      if (userOtp && signupData) {
        if (parseInt(OTP) === parseInt(userOtp)) {
          if (signupData?.isBusiness === true) {
            let _data = {
              userName: signupData?.userName,
              email: signupData?.email,
              password: signupData?.password,
              phone: signupData?.phone,
              role: "senderBusiness",
              businessRegNo: signupData?.businessRegNo,
              provider: "boon4",
              navigate,
            };
            dispatch(Signup(_data));
          } else {
            let _data = {
              userName: signupData?.userName,
              email: signupData?.email,
              password: signupData?.password,
              phone: signupData?.phone,
              role: "sender",
              provider: "boon4",
              navigate,
            };
            dispatch(Signup(_data));
          }
        } else {
          dispatch(showMessage("Incorrect OTP"));
          setError(true);
        }
      }
    } else {
      if (OTP.length > 0) {
        setError(false);
      }
    }
    console.log(forgetPassData?.checkUser);
    console.log(OTP.length);
    if (forgetPassData?.checkUser === false && OTP.length === 6) {
      let _data = {
        email: forgetPassData?.email,
        otp: +OTP,
        path: "/reset-password",
        navigate,
      };
      dispatch(verifyOtp(_data));
    }
  }, [OTP]);
  const handleEmailChange = () => {
    if (signupData) {
      if (signupData?.isBusiness === true) {
        let sendSignupData = {
          checkUser: true,
          email: signupData?.email,
          password: signupData?.password,
          phone: signupData?.phone,
          terms_conditions: signupData?.terms_conditions,
          userName: signupData?.userName,
          isBusiness: signupData?.isBusiness,
        };
        dispatch(savedSignupData(sendSignupData));
        navigate("/resend-email");
      } else {
        let sendSignupData = {
          checkUser: true,
          email: signupData?.email,
          password: signupData?.password,
          phone: signupData?.phone,
          terms_conditions: signupData?.terms_conditions,
          userName: signupData?.userName,
        };
        dispatch(savedSignupData(sendSignupData));
        navigate("/resend-email");
      }
    }
  };

  /**
   * It takes the email from the state and sends an OTP to that email.
   */
  const sendNewOtp = () => {
    setLoader(true);
    if (signupData) {
      if (signupData?.isBusiness === true) {
        let data = {
          checkUser: true,
          email: signupData?.email,
          password: signupData?.password,
          phone: signupData?.phone,
          terms_conditions: signupData?.terms_conditions,
          userName: signupData?.userName,
          isBusiness: signupData?.isBusiness,
          navigate,
        };
        sendOtp(data);
      } else {
        let data = {
          checkUser: true,
          email: signupData?.email,
          password: signupData?.password,
          phone: signupData?.phone,
          terms_conditions: signupData?.terms_conditions,
          userName: signupData?.userName,
          navigate,
        };
        sendOtp(data);
      }
    }
    if (forgetPassData) {
      let data = {
        checkUser: false,
        email: forgetPassData?.email,
        navigate,
      };
      sendOtp(data);
    }
    setLoader(false);
  };

  const renderButton = (buttonProps) => {
    return (
      <button {...buttonProps} className="text-sm order-1">
        {loader ? (
          <div className="flex row-start">
            <CircularProgress size={30} color="inherit" />
          </div>
        ) : (
          <div className="text-[18px] font-[700] leading-[21.6px] ">
            {timeInterval ? (
              <span className="text-[#CF2D39] hover:text-[#b0242f] cursor-pointer">
                Resend email
              </span>
            ) : (
              <span className="text-[#B0B0B0]">Resend email</span>
            )}
          </div>
        )}
      </button>
    );
  };

  return (
    <div className="flex w-[100%]">
      {/* side one  */}
      <div className="flex w-[100%] lg:w-[50%] flex-col justify-center items-center">
        {/* otp container  */}
        <div className="flex flex-col justify-center mt-4 h-full w-[95%] md:w-[90%] lg:w-[70%] xl:w-[60%] 2xl:w-[60%]">
          <div id="otp">
            <h1 className="leading-[28.8px] mb-2 text-[24px] font-[700]">
              Enter Code
            </h1>
            <p className="text-[18px] font-[400] text-sm leading-[24.3px] text-black opacity-[50%]">
              Please enter the 6-digit code sent to you at {signupData?.email}
            </p>
          </div>
          <div className="flex flex-col mt-5">
            <div>
              <OTPInput
                value={OTP}
                width="60"
                height="80"
                onChange={setOTP}
                autoFocus
                OTPLength={6}
                otpType="number"
                disabled={false}
                style={{
                  marginBottom: "20px",
                  display: "flex",
                }}
                inputStyles={{
                  border: error ? "1px solid red" : "1px solid #B0B0B0",
                  width: "3.5rem",
                  height: "3.5rem",
                }}
              />
              <p className="font-[400] text-[18px] leading-[26.1px]">
                Can’t find code? if you can’t see the email, check your spam
                folder or resend the email. If you are still having trouble
              </p>
            </div>
            <div className="flex justify-between w-full">
              <div>
                <ResendOTP
                  otpType="number"
                  maxTime={30}
                  onResendClick={() => sendNewOtp()}
                  timeInterval={1000}
                  renderTime={(timeInterval) => {
                    timeInterval === 0
                      ? setTimeInterval(true)
                      : setTimeInterval(false);
                    return (
                      <div className="order-2 ml-2 text-[18px] font-[700] leading-[145%] text-[#B0B0B0]">
                        (0:{timeInterval})
                      </div>
                    );
                  }}
                  renderButton={renderButton}
                  style={{
                    color: "grey",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                  className="mt-5"
                />
              </div>

              <button
                onClick={() => handleEmailChange()}
                className="mt-[22px] text-[#CF2D39] leading-[21.6px] text-[18px] font-[700] cursor-pointer hover:text-[#b0242f]"
              >
                Change email address
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* side two  */}
      <SideTwo />
    </div>
  );
};

export default OtpPage;
