import { combineReducers, configureStore } from "@reduxjs/toolkit";
import LoginSlice from './LoginSlice'

const rootReducer = combineReducers({
  userLogin: LoginSlice,
});

const store = configureStore({
  reducer: rootReducer 
});

export default store;

