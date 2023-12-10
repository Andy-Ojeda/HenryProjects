import { combineReducers, configureStore } from "@reduxjs/toolkit";
import LoginSlice from './LoginSlice'

const rootReducer = combineReducers({});

const store = configureStore({
  reducer: rootReducer,
  userLogin: LoginSlice,
});

export default store;

