/* eslint-disable no-undef */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const authenticateUser = createAsyncThunk(
  "auth/authenticateUser",
  async (credentials) => {
    const endpoint = 'https://devsync-production.up.railway.app/user/login';

    try {
      const response = await axios.post(endpoint, credentials);
      return response.data.user;
    } catch (error) {
      console.error("User not found: ", error);
      throw error;
    }
  }
);

const LoginSlice = createSlice({
  name: "userLogin",
  initialState: {
    isAuthenticated: false,
    user: {},
  },

  reducers: {
    loginUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.user = {};
    },
  },
});

export const { loginUser, logoutUser } = LoginSlice.actions;
export default LoginSlice.reducer;
