import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const JoinProjectSlice = createSlice({
  name: "joinProject",
  initialState: {
    loading: false,
    error: null,
    successMessage: null,
  },

  reducers: {
    joinProjectRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.successMessage = null;
    },
    joinProjectSuccess: (state, action) => {
      state.loading = false;
      state.successMessage = action.payload;
    },
    joinProjectFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { joinProjectFailure, joinProjectRequest, joinProjectSuccess } =
  JoinProjectSlice.actions;


export const joinProject = (projectId, userId) => {
  return async (dispatch) => {
    dispatch(joinProjectRequest());
    try {
      const { data } = await axios.post(
        "http://localhost:3001/project/register",
        { projectId, userId }
      );
      dispatch(joinProjectSuccess(data.message));
    } catch (error) {
      dispatch(joinProjectFailure(error.message));
    }
  };
};
