import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const viewProjectsSlice = createSlice({
  name: "viewProjects",
  initialState: {
    projects: [],
    projectById: [],
    
    projectsFilter: [], //* AGREGADO recientemente
    viewFilter: false,
  
  },

  reducers: {
    getProjects: (state, action) => {
      state.projects = action.payload;
    },
    getProjectById: (state, action) => {
      state.projectById = action.payload;
    },
    
    
    getProjectsFilter: (state, action) => {
      state.projectsFilter = action.payload;
    },
    setViewFilter: (state, action) => {
      state.viewFilter = action.payload;
    }
  
  
  },
});

export const { getProjects, getProjectById, getProjectsFilter, setViewFilter } = viewProjectsSlice.actions;
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


export const fetchProjectsFilter = (URL) =>{
  return async (dispatch) => {
    try {
      console.log("URL a dispatchar...", URL);
      const {data} = await axios.get(URL);
      console.log("DATADATADATA...", data)
      dispatch(getProjectsFilter(data));
      // return data;
    } catch (error) {
      console.log("Error en fetchProjectsFilter...", error.message);
    }
  };
};
export const viewFilterSN = (value) =>{
  
  console.log("VALUEEEEE:::: ", value);
  
  // return async (dispatch) => {
  //   try {
  //     console.log("Muestra el Filter?? ", value);
  //     dispatch(setViewFilter(value));
  //   } catch (error) {
  //     console.log("Error en viewFilterSN... ", error.message);
  //   }
  // }
}