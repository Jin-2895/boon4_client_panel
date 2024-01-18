import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Domain from "../../services/Endpoint";
import { setSession } from "../../services/jwt.service";
import { showMessage } from "../shared_stateSlice";

const initialState = {
  user: null,
  authLoading: false,
  authError: false,
};

export const loginService = createAsyncThunk(
  "auth/loginService",
  async (loginData, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post(`${Domain}/api/user/login`, loginData);
      if (data.success) {
        dispatch(showMessage(data.message));
        setSession(data.userData.accessToken);
      }
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

export const loginWithTokenService = createAsyncThunk(
  "auth/loginWithTokenService",
  async ({ rejectWithValue, dispatch }) => {
    try {
      let token = localStorage.getItem("jwt_refresh_token");
      let arg = { refreshToken: token };
      const { data } = await axios.post(
        `${Domain}/api/user/refresh_token`,
        arg
      );
      if (data.success) {
        dispatch(showMessage(data.message));
        setSession(data.userData.accessToken);
      }
      return data;
    } catch (error) {
      if (error.message && error.response.data.message) {
        dispatch(showMessage(error.response.data.message));
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginService.pending, (state) => {
      state.authLoading = true;
    });
    builder.addCase(loginService.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authLoading = false;
    });
    builder.addCase(loginService.rejected, (state, { payload }) => {
      state.authLoading = true;
      state.authError = payload;
    });
    builder.addCase(loginWithTokenService.pending, (state) => {
      state.authLoading = true;
    });
    builder.addCase(loginWithTokenService.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authLoading = false;
    });
    builder.addCase(loginWithTokenService.rejected, (state, { payload }) => {
      state.authLoading = true;
      state.authError = payload;
    });
  },
});

export default AuthSlice.reducer;
