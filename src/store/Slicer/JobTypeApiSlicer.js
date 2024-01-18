import { createSlice } from "@reduxjs/toolkit";
import { getJobType } from "../Reducer/JobTypeApi";

const initialState = {
  jobTypeLoading: false,
  jobTypeError: false,
  jobTypeData: [],
};
const JobTypeApiSlice = createSlice({
  name: "get_job_type",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getJobType.pending, (state) => {
      state.jobTypeLoading = true;
    });
    builder.addCase(getJobType.fulfilled, (state, action) => {
      state.jobTypeData = action.payload.jobTypeSizes;
      state.jobTypeLoading = false;
    });
    builder.addCase(getJobType.rejected, (state, action) => {
      state.jobTypeLoading = false;
      state.jobTypeError = action.payload;
    });
  },
});

export default JobTypeApiSlice.reducer;
