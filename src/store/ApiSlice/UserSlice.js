import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  userLoading: false,
  userError: false,
};

const UserSlice = createSlice({
  name: "user_data",
  initialState,
  reducers: {
    userDataLoading: (state, { payload }) => {
      state.userLoading = payload;
      state.userError = true;
    },
    getUserData: (state, { payload }) => {
      state.userData = payload;
      state.userLoading = false;
    },
    userDataError: (state, { payload }) => {
      state.userError = payload;
      state.userLoading = false;
    },
  },
});

export default UserSlice.reducer;
export const { userDataLoading, getUserData, userDataError } =
  UserSlice.actions;
