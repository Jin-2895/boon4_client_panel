import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Domain from "../../services/Endpoint";
import { showMessage } from "../shared_stateSlice";

export const getJobType = createAsyncThunk(
  "job/type",
  async (_data, { rejectWithValue, dispatch }) => {
    try {
      let token = JSON.parse(localStorage.getItem("jwt_access_token"));
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        `${Domain}/api/client/job_type_size?countryConfigurationId=${_data}`,
        config
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
