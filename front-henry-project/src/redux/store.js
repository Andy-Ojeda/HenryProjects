import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./Slices/LoginSlice.js";
import viewProjectsSlice from "./Slices/viewProjectsSlice.js";
import UsersSlice from "./Slices/viewUserSlice.js";

export const store = configureStore({
  reducer: {
    viewProjects: viewProjectsSlice,
    userLogin: LoginSlice,
    viewUsers: UsersSlice,
  },
});
