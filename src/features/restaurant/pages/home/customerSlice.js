import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { configForm } from "../../../../api/baseApi";
import { loginAPI, registerAPI } from "../../../../api/customerApi";
import { customerAuth, customerStorage } from "../../../../_storage/storage";
import { getCartByCustomer } from "../cart/shopping-cart-slice";

export const register = createAsyncThunk(
  "customer/register",
  async (req, thunkAPI) => {
    console.log(thunkAPI);
    const res = await axios.post(registerAPI, req, configForm);

    if (res.isSuccess) {
      thunkAPI.dispatch(login(req.phoneNumber));
    }
  }
);

export const login = createAsyncThunk(
  "customer/login",
  async (req, thunkAPI) => {
    const res = await axios.post(loginAPI, req);
    return res.data;
  }
);

const initialState = {
  userInfo: customerStorage.Get(),
  isAuth: customerAuth.isAuth(),
};

const customer = createSlice({
  name: "customer",
  initialState: initialState,
  reducers: {
    logout: (state, action) => {
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(register.rejected, (state, action) => {
      console.log(action.error.message);
    });
    builder.addCase(login.pending, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log(action.error.message);
    });
    builder.addCase(login.fulfilled, (state, action) => {
      customerStorage.Save(action.payload);
      state.userInfo = { ...action.payload };
      state.isAuth = true;
    });
  },
});

const { reducer, actions } = customer;

export const { logout } = actions;

export default reducer;
