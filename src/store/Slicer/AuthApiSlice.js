import { createSlice } from "@reduxjs/toolkit";
import {
  applyForVerifyingAccount,
  getUserProfile,
  sendOtp,
  Signin,
  Signup,
  updateProfileInfo,
  verifyOtp,
} from "../Reducer/AuthApi";

const initialState = {
  userLoading: false,
  userError: false,
  userData: null,
  userVerifyInfo: null,
  userProfileInfo: null,
  userOtp: null,
  userVerifyOtp: null,
  userUpdateProfileLoading: false,
  userUpdateProfileError: null,
  userUpdateProfile: null,
};

const AuthApiSlice = createSlice({
  name: "UserData",
  initialState,
  reducers: {
    /* A logout reducer. It is a function that takes in the current state and returns the new state. */
    logout: (state) => {
      //delete token from storage
      localStorage.removeItem("jwt_access_token");
      // delete refresh token from local storage
      localStorage.removeItem("jwt_refresh_token");
      // delte authorization check from storage
      localStorage.removeItem("authCheck");
      // delete country name from the storage
      localStorage.removeItem("userCountry&Time");
      state.userLoading = false;
      state.userError = null;
      state.userData = null;
      state.userProfileInfo = null;
      window.location.reload(false);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserProfile.pending, (state) => {
      state.userLoading = true;
    });
    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      state.userProfileInfo = action.payload;
      state.userLoading = false;
    });
    builder.addCase(getUserProfile.rejected, (state, action) => {
      state.userLoading = false;
      state.userError = action.payload;
    });
    builder.addCase(Signup.pending, (state) => {
      state.userLoading = true;
    });
    builder.addCase(Signup.fulfilled, (state, action) => {
      state.userData = action.payload.userData.userInfo;
      state.userLoading = false;
    });
    builder.addCase(Signup.rejected, (state, action) => {
      state.userLoading = false;
      state.userError = action.payload;
    });
    builder.addCase(sendOtp.pending, (state) => {
      state.userLoading = true;
    });
    builder.addCase(sendOtp.fulfilled, (state, action) => {
      state.userOtp = action.payload.otp;
      state.userLoading = false;
    });
    builder.addCase(sendOtp.rejected, (state, action) => {
      state.userLoading = false;
      state.userError = action.payload;
    });
    builder.addCase(verifyOtp.pending, (state) => {
      state.userLoading = true;
    });
    builder.addCase(verifyOtp.fulfilled, (state, action) => {
      state.userVerifyOtp = action.payload;
      state.userLoading = false;
    });
    builder.addCase(verifyOtp.rejected, (state, action) => {
      state.userLoading = false;
      state.userError = action.payload;
    });
    builder.addCase(Signin.pending, (state) => {
      state.userLoading = true;
    });
    builder.addCase(Signin.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.userLoading = false;
    });
    builder.addCase(Signin.rejected, (state, action) => {
      state.userLoading = false;
      state.userError = action.payload;
    });
    builder.addCase(applyForVerifyingAccount.pending, (state) => {
      state.userLoading = true;
    });
    builder.addCase(applyForVerifyingAccount.fulfilled, (state, action) => {
      state.userVerifyInfo = action.payload;
      state.userLoading = false;
    });
    builder.addCase(applyForVerifyingAccount.rejected, (state, action) => {
      state.userLoading = false;
      state.userError = action.payload;
    });
    builder.addCase(updateProfileInfo.pending, (state) => {
      state.userUpdateProfileLoading = true;
    });
    builder.addCase(updateProfileInfo.fulfilled, (state, action) => {
      state.userUpdateProfile = action.payload;
      state.userUpdateProfileLoading = false;
    });
    builder.addCase(updateProfileInfo.rejected, (state, action) => {
      state.userUpdateProfileLoading = false;
      state.userUpdateProfileError = action.payload;
    });
  },
});

export const { logout } = AuthApiSlice.actions;
export default AuthApiSlice.reducer;
