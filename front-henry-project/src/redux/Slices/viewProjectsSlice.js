import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


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
            console.log("A punto de hacer el GET...")
            
            const { data } = await axios.get("http://localhost:3001/project");
            console.log("ALL DATOS:", data);
            dispatch(getProjects(data));
        } catch (error) {
            console.log("Error en fetchAllProjects", error.message);
        }
    }
}



