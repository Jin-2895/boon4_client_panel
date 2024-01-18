import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Domain from "../../services/Endpoint";
import { showMessage } from "../shared_stateSlice";

export const CountryConfiguration = createAsyncThunk(
  "country/configuration",
  async (_data, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.get(
        `${Domain}/api/client/country_configuration?country=${_data}`
      );
      // _data.navigate("/business-verification");
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
