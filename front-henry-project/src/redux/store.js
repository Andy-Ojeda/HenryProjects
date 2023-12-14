import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./Slices/LoginSlice";
import viewProjectsSlice from "./Slices/viewProjectsSlice";

export const store = configureStore({
  reducer: {
    viewProjects: viewProjectsSlice,
    userLogin: LoginSlice,
  },
});
