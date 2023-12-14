import { configureStore } from '@reduxjs/toolkit';
import viewProjectsSlice from './Slices/viewProjectsSlice';

export const store = configureStore({
    reducer: {
        viewProjects: viewProjectsSlice,
    }
});