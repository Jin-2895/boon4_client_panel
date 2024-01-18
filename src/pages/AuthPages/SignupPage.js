import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { BsEyeFill, BsFacebook } from "react-icons/bs";
import "react-phone-number-input/style.css";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/high-res.css";
// import login_image from "../../assets/images/login-image.png";
import { Signup, sendOtp } from "../../store/Reducer/AuthApi";
import startsWith from "lodash.startswith";
import { Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import {
  googleSignUp,
  signUpWithFacebook,
  signUpWithGoogle,
} from "../../firebase";
import "./signup.css";
import SideTwo from "../../components/CommonComponents/SideTwo";

const SignupPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const { userLoading } = useSelector((state) => state.auth_userData);
  const { userData } = useSelector((state) => state.userData);
  const [isBusiness, setIsBusiness] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    setLoading(userLoading);
    data.phone = phone;
    data.checkUser = true;
    data.navigate = navigate;
    if (isBusiness === true) {
      data.isBusiness = true;
      data.role = "senderBusiness";
    }
    if (isBusiness === false) {
      data.isBusiness = false;
      data.role = "sender";
    }
    if (userData?.provider === "google") {
      data.role = userData.provider;
    }
    if (userData?.otpVerifiedStatus === true) {
      data.otpVerifiedStatus = userData.otpVerifiedStatus;
      dispatch(Signup(data));
    }
    if (userData?.otpVerifiedStatus === false) {
      data.otpVerifiedStatus = userData.otpVerifiedStatus;
      dispatch(sendOtp(data));
    }
    if (userData?.provider !== "google") {
      dispatch(sendOtp(data));
    }
    setLoading(userLoading);
  };

  React.useEffect(() => {
    if (userData !== null) {
      setValue("userName", userData.name);
      setValue("email", userData.email);
      setValue("password", userData.password);
    }
  }, [userData, setValue]);
  return (
    <div>
      <div className="flex w-[100%]">
        {/* side one start ------------------------------------------------------------------*/}
        <div className="flex w-[100%] lg:w-[50%] flex-col justify-center">
          <div className="flex flex-col justify-center h-[100vh] 2xl:overflow-auto xl:overflow-auto lg:overflow-auto overflow-auto scroll-m-0">
            {/* logo image start ------------------------------------------------- */}
            {/* <div className="flex justify-center lg:mt-[240px] xl:mt-0 2xl:mt-0"> */}
            <div className="flex justify-center mt-0 lg:mt-[10rem] xl:mt-[10rem] 2xl:mt-0">
              <img
                src={logo}
                style={{ width: "193px", height: "67px" }}
                className="mt-[35px] sm:mt-[52px] md:mt-[61px] lg:mt-[-5rem] xl:mt-[3.5rem] 2xl:mt-[3.5rem]"
                alt="boon4 logo"
              />
            </div>
            {/* logo image end ------------------------------------------------- */}
            {/* //////////////////////////////////////////////////////////////// */}
            {/* form section  start ---------------------------------------------*/}
            <div
              id="form-container"
              // className="lg:mt-7 xl:mt-2 2xl:mt-3 flex justify-center w-full"
              className="flex justify-center w-full"
            >
              <div className="sm:w-full max-w-[21.688rem]">
                <p className="text-[28px] leading-[33.6px] font-[700] py-4">
                  SignUp
                </p>
                {/* form_inputs section start-----------------*/}
                <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                  <div id="userName">
                    <p className="font-[400] text-[14px] leading-[16.8px] mb-2 mt-4">
                      Full Name
                    </p>
                    <input
                      type="text"
                      disabled={userData ? true : false}
                      {...register("userName", {
                        required: "Enter your full name",
                        minLength: {
                          value: 3,
                          message:
                            "Are you sure you entered your full name correctly?",
                        },
                        maxLength: {
                          value: 22,
                          message:
                            "Use 22 characters or less for your full name",
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
                      name="userName"
                      render={() => (
                        <Alert severity="error">
                          {errors.userName?.message}
                        </Alert>
                      )}
                    />
                  </div>
                  <div id="email" className="mt-2">
                    <p className="font-[400] text-[14px] leading-[16.8px] mb-2 mt-4">
                      Email Address
                    </p>
                    <input
                      autoComplete="off"
                      type="email"
                      disabled={userData ? true : false}
                      {...register("email", {
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
                  <div className="Password mt-2">
                    <p className="font-[400] text-[14px] leading-[16.8px] mb-2 mt-4">
                      Password
                    </p>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        disabled={userData ? true : false}
                        type={showPassword ? "text" : "password"}
                        id="password"
                        {...register("password", {
                          required: "required",
                          minLength: {
                            value: 8,
                            message:
                              "Use 8 characters or more for your password",
                          },
                        })}
                        className="w-full p-2"
                        style={{
                          border: "1px solid black",
                          outline: "none",
                        }}
                      />
                      <i
                        id="togglepassword"
                        className="absolute z-20 bg-white rounded-full right-4 md:top-3 sm:top-3 top-3 "
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {userData ? "" : <BsEyeFill />}
                      </i>
                      <ErrorMessage
                        errors={errors}
                        name="password"
                        render={() => (
                          <Alert severity="error">
                            {errors.password?.message}
                          </Alert>
                        )}
                      />
                    </div>
                  </div>
                  <div className="phone_number mt-2">
                    <p className="font-[400] text-[14px] leading-[16.8px] mb-2 mt-4">
                      Phone Number
                    </p>
                    <div className="w-[100%]">
                      <PhoneInput
                        country="my"
                        enableSearch="true"
                        countryCodeEditable={true}
                        showDropdown={false}
                        enableAreaCodes={true}
                        enableClickOutside={true}
                        onChange={(value, country) =>
                          setPhone(
                            `${country.countryCode}.${
                              country.dialCode
                            }.${value.slice(country.dialCode.length)}`
                          )
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
                      <ErrorMessage
                        errors={errors}
                        name="phone"
                        render={() => (
                          <Alert severity="error">
                            {errors.phone?.message}
                          </Alert>
                        )}
                      />
                    </div>
                  </div>
                  <p className="text-black opacity-[0.5] mt-2 font-[400] text-[14px] leading-[18.9px]">
                    We’ll send a verification code to your email account to
                    confirm your mobile number
                  </p>
                  {isBusiness && (
                    <div id="businessRegNo" className="mt-2">
                      <p className="font-[400] text-[14px] leading-[16.8px] mb-2 mt-4">
                        Business registration number
                      </p>
                      <input
                        type="text"
                        {...register("businessRegNo", {
                          required: "required",
                          minLength: {
                            value: 5,
                            message: "Minimum length of number should be 5",
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
                        name="businessRegNo"
                        render={() => (
                          <Alert severity="error">
                            {errors.businessRegNo?.message}
                          </Alert>
                        )}
                      />
                    </div>
                  )}
                  <div className="flex items-center my-4">
                    <input
                      id="isBusiness"
                      type="checkbox"
                      onChange={(e) => setIsBusiness(e.target.checked)}
                      value={isBusiness}
                      className="w-4 h-4 accent-[#CF2D39]"
                    />
                    <label
                      htmlFor="isBusiness"
                      className="ml-2 text-black opacity-[0.5] font-[500] text-[16px] leading-[19.2px]"
                    >
                      Is this a business account?
                    </label>
                  </div>
                  <div className="flex items-center my-4">
                    <Controller
                      name="terms_conditions"
                      control={control}
                      rules={{
                        required: "Terms and condition should be checked",
                      }}
                      render={({ field: { onChange, value } }) => (
                        <>
                          <input
                            id="terms_conditions"
                            type="checkbox"
                            onChange={onChange}
                            value={value ? value : ""}
                            defaultValue={false}
                            // {...register("terms_conditions", {
                            //   required: "agree terms and conditions first",
                            // })}
                            className="w-4 h-4 accent-[#CF2D39]"
                          />
                          <label htmlFor="terms_conditions">
                            <span className="ml-2 text-black opacity-[0.5] font-[500] text-[16px] leading-[19.2px]">
                              I agree with your{" "}
                            </span>
                            <Link
                              to="/terms-conditions"
                              className="text-[#CF2D39] font-[700] cursor-pointer hover:text-[#b0242f] transition-all  inline"
                            >
                              Terms & Conditions
                            </Link>
                          </label>
                        </>
                      )}
                    />
                  </div>
                  <ErrorMessage
                    errors={errors}
                    name="terms_conditions"
                    render={() => (
                      <Alert severity="error">
                        {errors.terms_conditions?.message}
                      </Alert>
                    )}
                  />
                  <div id="Buttons" className="mt-5">
                    <button
                      type="submit"
                      value="submit"
                      className={`${
                        loading
                          ? "bg-[#dad3d3] hover:bg-[#dad3d3]"
                          : "bg-[#CF2D39] hover:bg-[#b0242f]"
                      } relative shadow-md w-full p-2 text-white font-[700] text-[16px] leading-[21.79px] transition-all hover:ease-in ease-out not-italic`}
                    >
                      Continue
                      {loading && (
                        <div className="absolute top-[30%] left-[47%]">
                          <CircularProgress size={"20px"} />
                        </div>
                      )}
                    </button>
                    <div id="social" className="mb-8 mt-2">
                      <div className="">
                        <Button
                          color="secondary"
                          variant="outlined"
                          className="w-full"
                          startIcon={<FcGoogle />}
                          onClick={() => signUpWithGoogle(dispatch, navigate)}
                        >
                          Continue with google
                        </Button>
                      </div>
                      <div className="mt-2">
                        <LoginSocialFacebook
                          appId={"1383248212208100"}
                          fields="name,email,picture"
                          callback={(data) => {
                            console.log(data);
                          }}
                        >
                          <Button
                            color="secondary"
                            variant="outlined"
                            className="w-full"
                            startIcon={<BsFacebook color="blue" />}
                            onClick={() =>
                              signUpWithFacebook(dispatch, navigate)
                            }
                          >
                            Continue with facebook
                          </Button>
                        </LoginSocialFacebook>
                      </div>
                      <p className="mb-8 mt-2">
                        <span className="text-black opacity-[0.5] font-[500] text-[16px] leading-[21.6px]">
                          Already have an account ?{" "}
                        </span>
                        <Link
                          to="/login"
                          className="text-[#CF2D39] font-[700] cursor-pointer hover:text-[#b0242f] transition-all inline"
                        >
                          Login
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
                {/* form_inputs section end-----------------*/}
              </div>
            </div>
          </div>
        </div>
        {/* side two start------------------------------------------------------------------------*/}
        <SideTwo />
      </div>
    </div>
  );
};

export default SignupPage;
