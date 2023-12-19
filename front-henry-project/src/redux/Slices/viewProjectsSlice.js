import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const backURL = import.meta.env.VITE_URL_BACK;


export const viewProjectsSlice = createSlice({


    
    name: 'viewProjects', 
    initialState: {
        projects: ["pepito"],
    },    

    reducers: {
        getProjects: (state, action) => {
            state.projects = action.payload;
        }
    }

});

export const { getProjects } = viewProjectsSlice.actions;
export default viewProjectsSlice.reducer;
// export const stateProject = (state) => state.viewProjects.projects;

export const fetchAllProjects = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${backURL}/project`);
            console.log("ALL DATOS:", data);
            dispatch(getProjects(data));
        } catch (error) {
            console.log("Error en fetchAllProjects", error.message);
        }
    }
}



