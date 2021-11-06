import { createSlice } from "@reduxjs/toolkit";

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
      const indexItem = state.items.findIndex((i) => i.itemId === newItem.itemId);
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
