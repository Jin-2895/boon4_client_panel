import { useEffect } from "react";
// import jwtDecode from "jwt-decode";
import { getAccessToken, getRefreshToken } from "../../services/jwt.service";
// import { loginWithTokenService } from "../../store/ApiSlice/AuthSlice";
import { useDispatch } from "react-redux";
import { logout } from "../../store/Slicer/AuthApiSlice";
import { useLocation } from "react-router-dom";
// import axios from "axios";

const Auth = ({ children }) => {
  //   const { loginWithToken, tokenLoading, logoutService } = useBoundStore(
  //     (state) => state
  //   );
  const dispatch = useDispatch();

  const handleAuthentication = async () => {
    let access_token = getAccessToken();
    let refresh_token = getRefreshToken();
    if (!access_token || !refresh_token) {
      // if (
      //   location.pathname !==
      //   ("/login" ||
      //     "/forgot-password" ||
      //     "/signup" ||
      //     "/verify-otp" ||
      //     "/reset-password" ||
      //     "/terms-condition" ||
      //     "/resend-email" ||
      //     "/account-verified" ||
      //     "/pass-reset-success" ||
      //     "business-verification")
      // ) {
      //   dispatch(logout());
      // }
      // dispatch(logout());
      return;
    }
    if (!access_token) {
      // return dispatch(loginWithTokenService());
      return false;
    } else {
      return true;
    }
  };

  // const isAuthTokenValid = (refresh_token) => {
  //   const decoded = jwtDecode(refresh_token);
  //   const currentTime = Date.now() / 1000;
  //   if (decoded.exp < currentTime) {
  //     dispatch(logout());
  //     return false;
  //   } else {
  //     console.log("token valid");
  //     return true;
  //   }
  // };
  useEffect(() => {
    handleAuthentication();
  }, []);

  //   return <div>{tokenLoading ? "Cool Loading here..." : children}</div>;
  return <div>{children}</div>;
};

export default Auth;
