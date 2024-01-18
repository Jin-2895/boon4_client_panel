import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Domain from "../../services/Endpoint";
import { setSession } from "../../services/jwt.service";
import {
  reqPassData,
  savedForgetPassData,
  savedSignupData,
  showMessage,
} from "../shared_stateSlice";

export const Signup = createAsyncThunk(
  "auth/Services",
  async (_data, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post(`${Domain}/api/user/signUp`, _data);
      dispatch(showMessage(data.message));
      setSession(data.userData.accessToken, data.userData.refreshToken);
      _data.navigate("/business-verification");
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        dispatch(showMessage(error.response.data.message));
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
/* Creating a thunk that will be used to fetch the users signin. */
export const Signin = createAsyncThunk(
  "user/sign-in",
  async (_data, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post(`${Domain}/api/user/login`, _data);
      dispatch(showMessage(data.message));
      setSession(data.userData.accessToken, data.userData.refreshToken);
      _data.navigate("/");
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        dispatch(showMessage(error.response.data.message));
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const sendOtp = createAsyncThunk(
  "user/send_otp",
  async (_data, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post(`${Domain}/api/user/send_otp`, {
        email: _data.email,
        checkUser: _data.checkUser,
      });
      dispatch(showMessage(data.message));
      if (_data.checkUser === true) {
        let sendSignupData = {
          role: _data.role,
          otpVerifiedStatus: _data.otpVerifiedStatus,
          checkUser: _data.checkUser,
          email: _data.email,
          password: _data.password,
          businessRegNo: _data.businessRegNo,
          phone: _data.phone,
          terms_conditions: _data.terms_conditions,
          userName: _data.userName,
          isBusiness: _data.isBusiness,
        };
        dispatch(savedSignupData(sendSignupData));
        _data.navigate("/verify-otp");
      } else {
        let sendForgetPassData = {
          checkUser: _data.checkUser,
          email: _data.email,
        };
        dispatch(savedForgetPassData(sendForgetPassData));
        _data.navigate("/verify-otp");
      }

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        dispatch(showMessage(error.response.data.message));
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "user/verify_otp",
  async ({ email, otp, navigate, path }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post(`${Domain}/api/user/verify_otp`, {
        email,
        otp,
      });
      dispatch(showMessage(data.message));
      if (path) {
        let newPassData = {
          email: email,
          forgetPass: "true",
        };
        dispatch(reqPassData(newPassData));
        navigate(path);
      } else {
        navigate("/business-verification");
      }
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        dispatch(showMessage(error.response.data.message));
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const changePassword = createAsyncThunk(
  "user/change_password",
  async (_data, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post(`${Domain}/api/user/change_password/`, {
        email: _data.email,
        newPassword: _data.newPassword,
      });
      dispatch(showMessage(data.message));
      _data.navigate(_data.path);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        dispatch(showMessage(error.response.data.message));
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getUserProfile = createAsyncThunk(
  "user/get_profile",
  async (arg, { rejectWithValue, dispatch }) => {
    try {
      let token = JSON.parse(localStorage.getItem("jwt_access_token"));
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        `${Domain}/api/user/get_profile_info`,
        config
      );
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        dispatch(showMessage(error.response.data.message));
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// export const userBusinessSignup = async (inputData) => {
//   return new Promise((resolve, reject) => {
//     axios
//       .post(`${Domain}/api/user/create_businessAccount`, inputData)
//       .then((res) => resolve(res))
//       .catch((err) => reject(err));
//   });
// };

export const applyForVerifyingAccount = createAsyncThunk(
  "user/file-verification",
  async (_data, { rejectWithValue, dispatch }) => {
    try {
      let token = JSON.parse(localStorage.getItem("jwt_access_token"));
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.put(
        `${Domain}/api/client/file_verification`,
        _data.payload,
        config
      );
      dispatch(showMessage(data.message));
      _data.navigate(_data.path);
    } catch (error) {
      if (error.response && error.response.data.message) {
        dispatch(showMessage(error.response.data.message));
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const updateProfileInfo = createAsyncThunk(
  "user/update_profile_info",
  async (_data, { rejectWithValue, dispatch }) => {
    try {
      let token = JSON.parse(localStorage.getItem("jwt_access_token"));
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.put(
        `${Domain}/api/user/update_profile_info`,
        _data.payload,
        config
      );
      dispatch(showMessage(data.message));
      _data.navigate(_data.path);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        dispatch(showMessage(error.response.data.message));
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
