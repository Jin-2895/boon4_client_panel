import { Button, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
import logo from "../../assets/images/logo.png";
import login_image from "../../assets/images/login-image.png";
import { BsEyeFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { signInWithFacebook, signInWithGoogle } from "../../firebase";
import { Signin } from "../../store/Reducer/AuthApi";
import SideTwo from "../../components/CommonComponents/SideTwo";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const prvRoute = location?.state?.from;
  const [showPassword, setShowPassword] = useState(false);
  const { authCheck } = useSelector((state) => state.auth_userData);
  const { user, authLoading } = useSelector(({ auth }) => auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!!user) {
      if (prvRoute) {
        navigate(prvRoute.pathname);
      } else {
        navigate("/");
      }
    }
  }, [user]);

  useEffect(() => {
    if (authCheck) {
      navigate("/");
    }
  }, [authCheck]);

  const onSubmit = (data) => {
    const dataWithProvider = { ...data, provider: "boon4", navigate };
    dispatch(Signin(dataWithProvider));
  };
  return (
    <div>
      <div className="flex w-[100%] flex-row">
        {/* side one start ------------------------------------------------------------------*/}
        <div className="flex w-[100%] lg:w-[50%] flex-col justify-center items-center">
          {/* logo image start ------------------------------------------------- */}
          <div className="flex justify-center">
            <img
              src={logo}
              style={{ width: "193px", height: "67px" }}
              className=" mt-[41px] sm:mt-[132px] md:mt-[42px] lg:mt-[3.5rem] xl:mt-2 2xl:mt-2"
              alt="boon4 logo"
            />
          </div>
          {/* logo image end ------------------------------------------------- */}
          {/* //////////////////////////////////////////////////////////////// */}
          {/* form section  start ---------------------------------------------*/}
          <div id="form-container" className="mt-7 flex justify-center w-full">
            <div className="sm:w-full max-w-[21.688rem]">
              <p
                className="text-[1.75rem] font-[700] mb-3"
                // fontWeight="700"
              >
                SignIn
              </p>
              {/* form_inputs section start-----------------*/}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div id="Email">
                  <p className="font-[400] text-[14px]">Email Address</p>
                  <input
                    type="email"
                    id="email"
                    {...register("email", { required: "required" })}
                    className="w-full p-2 mt-2"
                    style={{
                      border: "1px solid black",
                      outline: "none",
                    }}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="password"
                    render={() => (
                      <Alert severity="error">{errors.email?.message}</Alert>
                    )}
                  />
                </div>
                <div className="Password mt-2">
                  <p className="font-[400] text-[14px]">Password</p>
                  <div className="relative">
                    <input
                      autoComplete="password"
                      type={showPassword ? "text" : "password"}
                      {...register("password", { required: "required" })}
                      id="password"
                      // className="w-full mb-[0.675rem] md:p-[0.575] sm:p-[0.775rem] p-[0.675rem] "
                      className="w-full p-2 mt-2"
                      style={{
                        border: "1px solid black",
                        outline: "none",
                      }}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="password"
                      render={() => (
                        <Alert severity="error">
                          {errors.password?.message}
                        </Alert>
                      )}
                    />
                    <i
                      type="togglePass"
                      id="togglePass"
                      className="absolute right-4 cursor-pointer md:top-5 sm:top-3 top-5"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <BsEyeFill />
                    </i>
                  </div>
                </div>
                <div
                  id="forget_password"
                  className="w-full flex justify-end mt-2"
                >
                  <Link
                    to={"/forgot-password"}
                    // className="text-[#CF2D39] mt-2 font-[600] underline hover:text-[#bf2733] cursor-pointer"
                    className="text-[#CF2D39] font-[600] xl:font-[700] cursor-pointer hover:text-[#b0242f] mt-2 underline"
                  >
                    Forgot Password
                  </Link>
                </div>
                <div id="Buttons" className="mt-6">
                  <button
                    // className="shadow-md w-full md:p-[0.575] sm:p-[0.775rem] p-[0.675rem] bg-[#CF2D39] text-white hover:bg-[#b0242f]"
                    // style={{ border: "1px solid black" }}
                    type="submit"
                    className={`${
                      authLoading
                        ? "bg-[#dad3d3] hover:bg-[#dad3d3]"
                        : "bg-[#CF2D39] hover:bg-[#b0242f]"
                    } relative shadow-md w-full p-2 text-white `}
                  >
                    Login
                    {authLoading && (
                      <div className="absolute top-[30%] left-[47%]">
                        <CircularProgress size={"20px"} />
                      </div>
                    )}
                  </button>

                  <p className="text-slate-400 my-6">
                    Don’t have an account ?{" "}
                    <Link
                      to="/signup"
                      className="text-[#CF2D39] font-[600] xl:font-[700] cursor-pointer hover:text-[#b0242f] inline"
                    >
                      Register
                    </Link>
                  </p>
                  <div
                    id="or"
                    className="flex justify-between items-center my-6"
                  >
                    <Divider color="#c6c6c6" width="37%" className="" />
                    <p className="text-[#B0B0B0]">or</p>
                    <Divider color="#c6c6c6" width="37%" />
                  </div>
                  <div id="social" className="mb-8">
                    <div className="mt-6">
                      <Button
                        onClick={() => signInWithGoogle(dispatch, navigate)}
                        color="secondary"
                        variant="outlined"
                        className="w-full"
                        startIcon={<FcGoogle />}
                      >
                        <span className="my-1">Continue with google</span>
                      </Button>
                    </div>
                    <div className="mt-6">
                      <Button
                        onClick={() => signInWithFacebook(dispatch, navigate)}
                        color="secondary"
                        variant="outlined"
                        className="w-full"
                        startIcon={<BsFacebook color="blue" />}
                      >
                        <span className="my-1">Continue with facebook</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
              {/* form_inputs section end-----------------*/}
            </div>
          </div>
        </div>
        {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* side two start------------------------------------------------------------------------*/}
        <SideTwo />
        {/* side two end ---------------------------------------------------------------------------- */}
      </div>
    </div>
  );
};

export default LoginPage;
