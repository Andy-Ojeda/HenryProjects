import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const viewUserSlice = createSlice({
  name: "viewUsers",
  initialState: {
    usersAdmin: [],
  },
  reducers: {
    getAllUsers: (state, action) => {
      state.usersAdmin = action.payload;
    },
  },
});

export const { getAllUsers } = viewUserSlice.actions;
export default viewUserSlice.reducer;

export const fetchAllUsers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        "https://devsync-production.up.railway.app/user"
      );
      dispatch(getAllUsers(data));
    } catch (error) {
      console.log("Error en fetchAllUsers", error.message);
    }
  };
};
