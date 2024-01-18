import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: null,
  signupData: null,
  forgetPassData: null,
  newPassData: null,
  alertState: {
    open: false,
    vertical: "top",
    horizontal: "center",
  },
};

const shared_stateSlice = createSlice({
  name: "shared_stateSlice",
  initialState,
  reducers: {
    savedSignupData: (state, { payload }) => {
      state.signupData = payload;
    },
    savedForgetPassData: (state, { payload }) => {
      state.forgetPassData = payload;
    },
    reqPassData: (state, { payload }) => {
      state.newPassData = payload;
    },
    showMessage: (state, { payload }) => {
      state.message = payload;
      state.alertState.open = true;
    },
    hideMessage: (state) => {
      state.alertState.open = false;
    },
  },
});

export default shared_stateSlice.reducer;
export const {
  showMessage,
  hideMessage,
  savedSignupData,
  savedForgetPassData,
  reqPassData,
} = shared_stateSlice.actions;
