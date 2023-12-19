import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./Slices/LoginSlice";
import viewProjectsSlice from "./Slices/viewProjectsSlice";
import UsersSlice from "./Slices/viewUserSlice";

export const store = configureStore({
  reducer: {
    viewProjects: viewProjectsSlice,
    userLogin: LoginSlice,
    viewUsers: UsersSlice,
  },
});
