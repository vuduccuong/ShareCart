import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { configDelete } from "../../../../api/baseApi";
import { createCartAPI } from "../../../../api/cartApi";
import { cartStorage, customerStorage } from "../../../../_storage/storage";

export const createCart = createAsyncThunk(
  "cart/createCart",
  async (shopId, thungkAPI) => {
    debugger;
    const custom = customerStorage.Get();
    const data = {
      customerId: custom.customerId,
      shopId: shopId,
    };
    var res = await axios.post(createCartAPI, data, configDelete);
    res.status === 200 && cartStorage.Save(res.data);
    return res.data;
  }
);

const initSate = {
  items: [],
  isOpendCart: false,
};

const cart = createSlice({
  name: "carts",
  initialState: initSate,
  reducers: {
    addCart: (state, action) => {
      const newItem = { ...action.payload };
      const indexItem = state.items.findIndex(
        (i) => i.itemId === newItem.itemId
      );
      if (indexItem >= 0) {
        state.items[indexItem] = {
          ...newItem,
          quantity: state.items[indexItem].quantity + 1,
        };
        return;
      }
      state.items.push(newItem);
    },
    toggleCard: (state, action) => {
      state.isOpendCart = !state.isOpendCart;
    },
  },
});

const { reducer, actions } = cart;

export const { addCart, toggleCard } = actions;
export default reducer;
