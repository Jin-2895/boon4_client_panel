import { createSlice } from "@reduxjs/toolkit";
import { GetEstimate } from "../Reducer/GetEstimateApi";

const initialState = {
  estimatorLoading: false,
  estimatorError: false,
  estimatorData: [],
};
const GetEstimateSlice = createSlice({
  name: "get_estimate",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(GetEstimate.pending, (state) => {
      state.estimatorLoading = true;
    });
    builder.addCase(GetEstimate.fulfilled, (state, action) => {
      state.estimatorData = action.payload;
      state.estimatorLoading = false;
    });
    builder.addCase(GetEstimate.rejected, (state, action) => {
      state.estimatorLoading = false;
      state.estimatorError = action.payload;
    });
  },
});

export default GetEstimateSlice.reducer;
