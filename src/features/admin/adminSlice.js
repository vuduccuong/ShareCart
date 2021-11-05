import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  adminGetByIdAPI,
  adminLoginAPI,
  adminRegisterAPI,
} from "../../api/adminApi";
import { configForm } from "../../api/baseApi";
import { adminAuth, adminStorage } from "../../_storage/storage";

export const adminLogin = createAsyncThunk(
  "admin/login",
  async (req, thunkAPI) => {
    const res = await axios.post(adminLoginAPI, req);
    thunkAPI.dispatch(getAdminInfoById(res.data.shopId));
    return res.data;
  }
);

export const adminRegister = createAsyncThunk(
  "admin/register",
  async (req, thunkAPI) => {
    const res = await axios.post(adminRegisterAPI, req, configForm);
    if (!res.data.errorMessage) {
      thunkAPI.dispatch(adminLogin(req.phoneNumber));
    }
    return res.data;
  }
);

export const getAdminInfoById = createAsyncThunk(
  "admin/getById",
  async (shopId, thunkAPI) => {
    const res = await axios.get(adminGetByIdAPI(shopId));
    return res.data;
  }
);

const initialState = {
  adminAuth: adminStorage.Get(),
  isAuth: adminAuth.isAuth(),
  adminInfo: {},
};

const admin = createSlice({
  name: "admin",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      adminStorage.Remove();
      state.isAuth = false;
      state.adminAuth = {};
      state.adminInfo = {};
      window.location.href = "/admin/login";
    },
    createNewProduct: (state, action)=>{
      const newProduct = {...action.payload};
      state.adminInfo.items.unshift(newProduct);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(adminLogin.pending, (state, action) => {
    });
    builder.addCase(adminLogin.rejected, (state, action) => {
    });
    builder.addCase(adminLogin.fulfilled, (state, action) => {
      adminStorage.Save(action.payload);
      state.adminAuth = { ...action.payload };
      state.isAuth = true;
    });
    builder.addCase(getAdminInfoById.fulfilled, (state, action) => {
      state.adminInfo = { ...action.payload };
    });
  },
});

const { reducer, actions } = admin;

export const { logout, createNewProduct } = actions;

export default reducer;
