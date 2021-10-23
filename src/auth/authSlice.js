import { createSlice } from "@reduxjs/toolkit";
import {localKey} from "./../utils/localKey";
const auth = localStorage.getItem(localKey.USER_AUTH);

const userAuth = createSlice({
  name: "userAuth",
  initialState: {
    isAuth: auth,
  },
  reducers: {
    login: (state, action) => {
      localStorage.setItem(localKey.USER_AUTH, "true");
      state.isAuth = "true";
    },
    logout: (state, action) => {
      localStorage.setItem(localKey.USER_AUTH, "");
      state.isAuth = "false";
    },
  },
});

const { reducer, actions } = userAuth;
export const { login, logout } = actions;

export default reducer;
