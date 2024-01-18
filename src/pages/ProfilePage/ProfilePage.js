import React, { useEffect, useState } from "react";
import TextComp from "../../components/shared-components/TextComp";
import { useDispatch, useSelector } from "react-redux";
import startsWith from "lodash.startswith";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Alert from "@mui/material/Alert";
import "react-phone-input-2/lib/high-res.css";
import { ReactComponent as CancelSmall } from "../../assets/svg/cancelSmall.svg";
import PhoneInput from "react-phone-input-2";
import {
  getUserProfile,
  sendOtp,
  updateProfileInfo,
} from "../../store/Reducer/AuthApi";
import Upload from "../../components/CommonComponents/Upload";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import { ProfilePicture } from "./ProfilePicture";
import { showMessage } from "../../store/shared_stateSlice";
import { UI_API } from "../../services/constant";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userFullName, setUserFullName] = useState("");
  const [userPhone, setUserPhone] = useState("pk");
  const [userBusinessRegNo, setUserBusinessRegNo] = useState("");
  const [loading, setLoading] = useState(false);

  const [userNameButton, setUserNameButton] = useState(false);
  const [userPhoneCode, setUserPhoneCode] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const { userProfileInfo } = useSelector((state) => state.auth_userData);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    control,
  } = useForm();

  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  useEffect(() => {
    if (userProfileInfo) {
      setValue("userName", userProfileInfo?.user?.userName);
      setValue("email", userProfileInfo?.user?.email);
      setValue("phone", userPhoneNumber);
      setValue("businessRegNo", userProfileInfo?.user?.businessRegNo);
    }
    //userPhone number to fill into the local states and uploading it to the form
    if (userProfileInfo) {
      let userCountryCode = userProfileInfo?.user?.phone
        .slice(0, 2)
        .toLowerCase();
      setUserPhone(userCountryCode);
      let userNumberCode = userProfileInfo?.user?.phone.slice(3, 5);
      let userNumber = userProfileInfo?.user?.phone.slice(6);
      let phoneNumber = userNumberCode.concat(userNumber);
      setUserPhoneNumber(phoneNumber);
    }
  }, [userProfileInfo]);

  const onSubmit = () => {
    setLoading(true);
    console.log(userFullName);
    if (userFullName.length > 3) {
      let payload = UI_API._generateFormData({ userName: userFullName });
      console.log(payload);
      let _data = {
        payload,
        navigate,
        path: "/profile-info",
      };
      dispatch(updateProfileInfo(_data));
    } else {
      setLoading(false);
      setUserNameButton(false);
      return dispatch(showMessage("Enter your full name correctly"));
    }
    if (userPhone.length > 9) {
      console.log(userPhone);
      let payload = UI_API._generateFormData({ phone: userPhone });
      let _data = {
        payload,
        navigate,
        path: "/profile-info",
      };
      dispatch(updateProfileInfo(_data));
    } else {
      setLoading(false);
      setUserNameButton(false);
      return dispatch(showMessage("Enter you number correctly"));
    }
    if (userBusinessRegNo.length > 8) {
      let payload = UI_API._generateFormData({
        BusinessRegNo: userBusinessRegNo,
      });
      let _data = {
        payload,
        navigate,
        path: "/profile-info",
      };
      dispatch(updateProfileInfo(_data));
    } else {
      setLoading(false);
      setUserNameButton(false);
      return dispatch(
        showMessage("Your bussines number must be 8 digit or above")
      );
    }
    setLoading(false);
    setUserNameButton(false);
  };

  const handleUserNameChange = (e) => {
    e.preventDefault();
    setUserNameButton(true);
  };
  const handlePassChange = () => {
    let _data = {
      email: userProfileInfo?.user?.email,
      checkUser: false,
      path: "/verify-otp",
      navigate,
    };
    dispatch(sendOtp(_data));
  };

  const handleVerification = (e) => {
    e.preventDefault();
    console.log("Email Verification");
  };

  return (
    <>
      <TextComp variant="heading" className="">
        Profile Information
      </TextComp>
      <p className="opacity-50">Edit your profile information.</p>
      <div className="mt-8 py-[4rem] bg-white w-full shadow-md">
        <ProfilePicture userProfileInfo={userProfileInfo} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 px-4 md:px-6 lg:px-8 xl:px-10 mt-8 md:gap-10">
            <div className="userName w-[100%] xl:px-10">
              <p className="font-[500] text-[16px] leading-[19.2px] mb-2 mt-4 capitalize">
                Full Name
              </p>
              <div
                id="userName"
                type="userName"
                className="flex items-center border-b border-black border-opacity-20 py-3"
                {...register("userName", {
                  required: "Please enter your Full name",
                })}
              >
                <input
                  name="userName"
                  onChange={(e) => setUserFullName(e.target.value)}
                  disabled={userNameButton === true ? false : true}
                  className="appearance-none bg-transparent border-none capitalize w-full text-black mr-3 font-[500] text-[16px] leading-[19.2px] focus:outline-none"
                  type="username"
                  aria-label="Full name"
                />
                {userNameButton === true ? (
                  <div className="flex flex-row gap-2">
                    <button
                      className="bg-[#CF2D39] hover:bg-red-700 px-2 py-1 text-white"
                      type="submit"
                    >
                      Update
                    </button>
                    <button
                      className="text-[#CF2D39] px-1 py-1"
                      onClick={() => setUserNameButton(false)}
                    >
                      <CancelSmall />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={(e) => handleUserNameChange(e)}
                    className="flex-shrink-0 text-sm text-[#CF2D39] font-[500] text-[16px] leading-[19.2px]  py-1 md:px-6 "
                    type="button"
                  >
                    Edit
                  </button>
                )}
                <ErrorMessage
                  errors={errors}
                  name="userName"
                  render={() => (
                    <Alert severity="error">{errors.userName?.message}</Alert>
                  )}
                />
              </div>
            </div>
            <div className="email w-[100%] xl:px-10">
              <p className="font-[500] text-[16px] leading-[19.2px]  mb-2 mt-4 capitalize">
                Email
              </p>
              <div
                id="email"
                type="email"
                {...register("email", {
                  required: "required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message:
                      "Entered value does not match email format someone@example.com",
                  },
                })}
                className="flex items-center border-b border-black border-opacity-20 py-4"
              >
                <input
                  disabled
                  className="appearance-none bg-transparent border-none w-full text-black mr-3 font-[500] text-[16px] leading-[19.2px]  focus:outline-none"
                  type="text"
                  aria-label="Email"
                />
                {userProfileInfo?.user?.provider === "boon4" ? (
                  <button
                    disabled
                    className="flex-shrink-0 text-sm  font-[500] text-[16px] leading-[19.2px]  xl:tracking-[1.6px] "
                    type="button"
                  >
                    <span className="text-[#006D23] bg-[#CDF3C6] py-1 px-4 lg:px-3 xl:px-4 rounded">
                      Verified
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={(e) => handleVerification(e)}
                    className="flex-shrink-0 text-sm  font-[500] text-[16px] leading-[19.2px]  xl:tracking-[1.6px] "
                    type="button"
                  >
                    <span className="bg-red-100 text-[#CF2D39] py-1 px-4 lg:px-3 xl:px-4 rounded">
                      Verify
                    </span>
                  </button>
                )}
                <ErrorMessage
                  errors={errors}
                  name="email"
                  render={() => (
                    <Alert severity="error">{errors.email?.message}</Alert>
                  )}
                />
              </div>
            </div>
            <div className="phone w-[100%] xl:px-10 md:mt-8">
              <p className="font-[500] text-[16px] leading-[19.2px]  mb-2 mt-4">
                Phone Number
              </p>
              <div id="phone" className="relative phone w-[100%]">
                <PhoneInput
                  country={userPhoneCode}
                  value={userPhoneNumber}
                  enableSearch="true"
                  countryCodeEditable={true}
                  showDropdown={false}
                  enableAreaCodes={true}
                  enableClickOutside={true}
                  onChange={(value, country) =>
                    country
                      ? setUserPhoneCode(
                          `${country.countryCode}.${
                            country.dialCode
                          }.${value.slice(country.dialCode.length)}`
                        )
                      : null
                  }
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: true,
                  }}
                  isValid={(inputNumber, country, countries) => {
                    return countries.some((country) => {
                      return (
                        startsWith(inputNumber, country.dialCode) ||
                        startsWith(country.dialCode, inputNumber)
                      );
                    });
                  }}
                />
                {userProfileInfo?.user?.isPhoneNoVerified === true ? (
                  <button
                    disabled
                    className="absolute top-4 right-0 flex-shrink-0 text-sm  font-[500] text-[16px] leading-[19.2px]  xl:tracking-[1.6px] "
                    type="button"
                  >
                    <span className="text-[#006D23] bg-[#CDF3C6] py-1 px-4 lg:px-3 xl:px-4 rounded">
                      Verified
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={(e) => handleVerification(e)}
                    className="absolute top-4 right-0 flex-shrink-0 text-sm  font-[500] text-[16px] leading-[19.2px]  xl:tracking-[1.6px] "
                    type="button"
                  >
                    <span className="bg-red-100 text-[#CF2D39] py-1 px-4 lg:px-3 xl:px-4 rounded">
                      Verify
                    </span>
                  </button>
                )}

                <ErrorMessage
                  errors={errors}
                  name="phone"
                  render={() => (
                    <Alert severity="error">{errors.phone?.message}</Alert>
                  )}
                />
              </div>
            </div>
            <div className="password w-[100%] xl:px-10 md:mt-8">
              <p className="font-[500] text-[16px] leading-[19.2px]  mb-2 mt-4">
                Password
              </p>
              <div className="relative">
                <input
                  disabled
                  type="password"
                  autoComplete="on"
                  placeholder="• • • • • • • • • •"
                  className="appearance-none placeholder:text-black py-4 placeholder:opacity-80 placeholder:font-[500] bg-transparent border-none border-b-2 border-black border-opacity-20 w-full text-black mr-3 font-[500] text-[16px] leading-[20px]  focus:outline-none"
                  style={{
                    borderBottom: "0.5px solid rgba(0, 0, 0, 0.20)",
                    outline: "none",
                  }}
                />
                <div className="absolute right-0 md:right-0 lg:-right-1 -top-1 md:top-3 xl:top-3">
                  <button
                    onClick={() => handlePassChange()}
                    className="flex-shrink-0 z-100 text-sm text-[#CF2D39] font-[500] text-[16px] leading-[19.2px] py-1 md:px-6 md:mt-0 mt-1"
                    type="button"
                  >
                    Edit
                  </button>
                </div>
                <ErrorMessage
                  errors={errors}
                  name="password"
                  render={() => (
                    <Alert severity="error">{errors.password?.message}</Alert>
                  )}
                />
              </div>
            </div>
            {userProfileInfo?.user?.role === "sender" ? null : (
              <div className="businessRegNo w-[100%] xl:px-10 md:mt-8">
                <p className="font-[500] text-[16px] leading-[19.2px]  mb-2 mt-4">
                  Business Registration
                </p>
                <div>
                  <input
                    value={
                      userProfileInfo
                        ? userProfileInfo?.user?.businessRegNo
                        : ""
                    }
                    onChange={(e) => setUserBusinessRegNo(e.target.value)}
                    style={{
                      width: "100%",
                      borderBottom: "0.5px solid rgba(0, 0, 0, 0.20",
                      padding: "0.5rem",
                      outline: "none",
                    }}
                    // value={value}
                    type="number"
                    name="businessRegNo"
                    id="businessRegNo"
                  />
                  <ErrorMessage
                    errors={errors}
                    name="businessRegNo"
                    render={() => (
                      <Alert severity="error">
                        {errors.businessReg?.message}
                      </Alert>
                    )}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 px-4 md:px-6 lg:px-8 xl:px-10  xl:ml-10 mt-8">
            <div className="uploads w-[100%] md:mt-8 ">
              <Upload />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfilePage;
