import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Domain from "../../services/Endpoint";
import { showMessage } from "../shared_stateSlice";

export const GetEstimate = createAsyncThunk(
  "get_estimate",
  async (_data, { rejectWithValue, dispatch }) => {
    try {
      let token = JSON.parse(localStorage.getItem("jwt_access_token"));
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        `${Domain}/api/client/estimator?countryConfigurationId=${_data.countryConfigurationId}&sizeId=${_data.id}`,
        _data.data,
        config
      );
      dispatch(showMessage(data.message));
      _data.navigate(
        `/delivery-estimator/${_data.curr}/${data.estimate.estimatedFare}`
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
