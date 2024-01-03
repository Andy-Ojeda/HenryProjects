/* eslint-disable no-undef */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const authenticateUser = createAsyncThunk(
  "authenticateUser",
  async (credentials) => {
    // const endpoint = 'https://devsync-production.up.railway.app/user/login';
    //const endpoint = import.meta.env.VITE_URL_BACK;

    const endpoint = 'http://localhost:3001/user/login'
    try {
      const response = await axios.post(endpoint, credentials);
      return response.data;
      
      
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
