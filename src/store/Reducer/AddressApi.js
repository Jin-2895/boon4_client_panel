import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Domain from "../../services/Endpoint";
import { showMessage } from "../shared_stateSlice";

export const SaveUserAddress = createAsyncThunk(
  "auth/save_user_address",
  async (_data, { rejectWithValue, dispatch }) => {
    try {
      let token = JSON.parse(localStorage.getItem("jwt_access_token"));
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        `${Domain}/api/user/address`,
        _data.data,
        config
      );
      dispatch(showMessage(data.message));
      _data.navigate(_data.path);
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

export const GetUserAddress = createAsyncThunk(
  "auth/get_user_address",
  async (_data, { rejectWithValue, dispatch }) => {
    try {
      let token = JSON.parse(localStorage.getItem("jwt_access_token"));
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(`${Domain}/api/user/address`, config);
      // dispatch(showMessage(data.message));
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

export const DeleteUserAddress = createAsyncThunk(
  "auth/delete_user_address",
  async (_data, { rejectWithValue, dispatch }) => {
    try {
      let token = JSON.parse(localStorage.getItem("jwt_access_token"));
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.delete(
        `${Domain}/api/user/address/${_data.id}`,
        config
      );
      dispatch(showMessage(data.message));
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

export const UpdateUserAddress = createAsyncThunk(
  "auth/update_user_address",
  async (_data, { rejectWithValue, dispatch }) => {
    try {
      let token = JSON.parse(localStorage.getItem("jwt_access_token"));
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.put(
        `${Domain}/api/user/address/${_data.id}`,
        _data.data,
        config
      );
      dispatch(showMessage(data.message));
      _data.navigate(_data.path);
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
