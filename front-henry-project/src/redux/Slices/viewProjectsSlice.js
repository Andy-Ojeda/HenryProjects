import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const viewProjectsSlice = createSlice({
  name: "viewProjects",
  initialState: {
    projects: [],
    projectById: {},
  },

  reducers: {
    getProjects: (state, action) => {
      state.projects = action.payload;
    },
    getProjectById: (state, action) => {
      state.projectById = action.payload;
   
    },
  },
});

export const { getProjects, getProjectById } = viewProjectsSlice.actions;
export default viewProjectsSlice.reducer;
// export const stateProject = (state) => state.viewProjects.projects;

export const fetchAllProjects = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(

        "http://localhost:3001/project"
        // "https://devsync-production.up.railway.app/project"

       
      );
      dispatch(getProjects(data));
    } catch (error) {
      console.log("Error en fetchAllProjects", error.message);
    }
  };
};

export const fetchProjectById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(
        // `https://devsync-production.up.railway.app/project/${id}`
        `http://localhost:3001/project/${id}`
      );
      dispatch(getProjectById(data));
      return data;
    } catch (error) {
      console.log("Error en fetchProjectById", error.message);
    }
  };
};

export const fetchProjectUpdate = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        // `https://devsync-production.up.railway.app/project/${id}`
        `http://localhost:3001/project/${id}`
      );
      dispatch(getProjectById(data));
      return data;
    } catch (error) {
      console.log("Error en fetchProjectById", error.message);
    }
  };
};
