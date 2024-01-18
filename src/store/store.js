import { configureStore } from "@reduxjs/toolkit";
import AuthApiSlice from "./Slicer/AuthApiSlice";
import authReducer from "./ApiSlice/AuthSlice";
import shared_stateSlice from "./shared_stateSlice";
import userDataReducer from "./ApiSlice/UserSlice";
import AddressApiSlice from "./Slicer/AddressApiSlice";
import CountryConfigurationSlice from "./Slicer/CountryConfigurationSlice";
import JobTypeApiSlicer from "./Slicer/JobTypeApiSlicer";
import GetEstimateSlice from "./Slicer/GetEstimateSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    userData: userDataReducer,
    shared_state: shared_stateSlice,
    auth_userData: AuthApiSlice,
    userAddressData: AddressApiSlice,
    countryConfiguration: CountryConfigurationSlice,
    jobType: JobTypeApiSlicer,
    estimator: GetEstimateSlice,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     immutableCheck: {
  //       ignoredPaths: [
  //         saveUserAddress,
  //         getUserAddress,
  //         updateUserAddress,
  //         deleteUserAddress,
  //         userData,
  //         userVerifyInfo,
  //         userProfileInfo,
  //         countryConfigurationData,
  //       ],
  //     },
  //   }),
  devTools: true,
});
