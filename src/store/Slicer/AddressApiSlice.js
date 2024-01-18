import { createSlice } from "@reduxjs/toolkit";
import {
  DeleteUserAddress,
  GetUserAddress,
  SaveUserAddress,
  UpdateUserAddress,
} from "../Reducer/AddressApi";

const initialState = {
  addressLoading: false,
  addressError: false,
  saveUserAddress: null,
  getUserAddress: null,
  updateUserAddress: null,
  deleteUserAddress: null,
};

const AddressApiSlice = createSlice({
  name: "user_address",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(SaveUserAddress.pending, (state) => {
      state.addressLoading = true;
    });
    builder.addCase(SaveUserAddress.fulfilled, (state, action) => {
      state.saveUserAddress = action.payload;
      state.addressLoading = false;
    });
    builder.addCase(SaveUserAddress.rejected, (state, action) => {
      state.addressLoading = true;
      state.addressError = action.payload;
    });
    builder.addCase(GetUserAddress.pending, (state) => {
      state.addressLoading = true;
    });
    builder.addCase(GetUserAddress.fulfilled, (state, action) => {
      state.getUserAddress = action.payload.addresses;
      state.addressLoading = false;
    });
    builder.addCase(GetUserAddress.rejected, (state, action) => {
      state.addressLoading = true;
      state.addressError = action.payload;
    });
    builder.addCase(UpdateUserAddress.pending, (state) => {
      state.addressLoading = true;
    });
    builder.addCase(UpdateUserAddress.fulfilled, (state, action) => {
      state.updateUserAddress = action.payload;
      state.addressLoading = false;
    });
    builder.addCase(UpdateUserAddress.rejected, (state, action) => {
      state.addressLoading = true;
      state.addressError = action.payload;
    });
    builder.addCase(DeleteUserAddress.pending, (state) => {
      state.addressLoading = true;
    });
    builder.addCase(DeleteUserAddress.fulfilled, (state, action) => {
      state.deleteUserAddress = action.payload;
      state.addressLoading = false;
    });
    builder.addCase(DeleteUserAddress.rejected, (state, action) => {
      state.addressLoading = true;
      state.addressError = action.payload;
    });
  },
});

// export const { anything } = AddressApiSlice.actions;
export default AddressApiSlice.reducer;
