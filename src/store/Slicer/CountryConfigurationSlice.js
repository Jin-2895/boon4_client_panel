import { createSlice } from "@reduxjs/toolkit";
import { CountryConfiguration } from "../Reducer/CountryConfigurationApi";

const initialState = {
  countryConfigurationLoading: false,
  countryConfigurationError: false,
  countryConfigurationData: [],
};
const CountryConfigurationApiSlice = createSlice({
  name: "get_country_configuration",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(CountryConfiguration.pending, (state) => {
      state.countryConfigurationLoading = true;
    });
    builder.addCase(CountryConfiguration.fulfilled, (state, action) => {
      state.countryConfigurationData =
        action.payload.countryConfigurations.rows;
      state.countryConfigurationLoading = false;
    });
    builder.addCase(CountryConfiguration.rejected, (state, action) => {
      state.countryConfigurationLoading = false;
      state.countryConfigurationError = action.payload;
    });
  },
});

export default CountryConfigurationApiSlice.reducer;
