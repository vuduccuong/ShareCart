import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { homeAPI } from "../../../../api/home";

export const getAllProduct = createAsyncThunk("orders/getAll", async () => {
  const res = await axios.get(homeAPI);
  return res.data;
});

const initialOrders = {
  foods: [],
  titleInfo: {},
};

const order = createSlice({
  name: "orders",
  initialState: initialOrders,
  reducers: {
    loadOrder: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProduct.fulfilled, (state, action) => {
      state.foods = action.payload;
    });
  },
});

const { reducer, actions } = order;

export const { loadOrder } = actions;

export default reducer;
