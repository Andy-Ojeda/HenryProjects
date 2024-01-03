import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    error: null,
    successMessage: null,
}

export const createProject = createAsyncThunk('project/create', async(projectData) => {
    try {
        const response = await axios.post('http://localhost:3001/project/create', projectData)
        return response.data
    } catch (error) {
        throw error.response.data
    }
}) 

const projectSlice = createSlice ({
    name: 'project',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(createProject.fulfilled, (state, action) => {
            state.loading= false,
            state.successMessage = action.payload.message,
            state.error= null
        })
        .addCase(createProject.pending, (state) => {
            state.loading = true;
            state.successMessage = null;
            state.error = null;
          })
          .addCase(createProject.rejected, (state, action) => {
            state.loading = false;
            state.successMessage = null;
            state.error = action.error.message;
          });
    }
})


export default projectSlice.reducer;