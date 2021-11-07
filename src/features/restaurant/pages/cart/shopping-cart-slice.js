import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { configDelete } from "../../../../api/baseApi";
import {
  addCartAPI,
  createCartAPI,
  getCartByCustomerAPI,
} from "../../../../api/cartApi";
import { cartStorage, customerStorage } from "../../../../_storage/storage";

export const getCartByCustomer = (customerId) => {
  axios.get(getCartByCustomerAPI(customerId)).then((res) => {
    res.status === 200 && cartStorage.Save(res.data);
  });
};

export const createAndAddCart = createAsyncThunk(
  "cart/createCart",
  async (productInfo, thungkAPI) => {
    const custom = customerStorage.Get();
    const data = {
      customerId: custom.customerId,
      shopId: productInfo.shopId,
    };

    const cartInfo = cartStorage.Get();
    if (!cartInfo) {
      var res = await axios.post(createCartAPI, data, configDelete);
      res.status === 200 && cartStorage.Save(res.data);
    }
    const itemInfo = {
      itemId: productInfo.itemId,
      customerId: custom.customerId,
      cartId: cartStorage.Get().cartId,
    };
    await axios.post(addCartAPI, itemInfo, configDelete);
    // thungkAPI.dispatch(addCart(productInfo));
    return productInfo;
  }
);

const initSate = {
  items: cartStorage.Get().itemsInCart,
  totalPrice: cartStorage.Get().totalPrice,
  isOpendCart: false,
  cartId: cartStorage.Get().cartId,
};

const cart = createSlice({
  name: "carts",
  initialState: initSate,
  reducers: {
    addCart: (state, action) => {
      const newItem = { ...action.payload };
      state.totalPrice += newItem.price;
      const indexItem = state.items.findIndex(
        (i) => i.itemId === newItem.itemId
      );
      if (indexItem >= 0) {
        state.items[indexItem] = {
          ...newItem,
          quantity: state.items[indexItem].amount + 1,
        };
        return;
      }
      state.items.push(newItem);
    },
    toggleCard: (state, action) => {
      state.isOpendCart = !state.isOpendCart;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createAndAddCart.fulfilled, (state, action) => {
      console.log("add cart:", action.payload);
      const newItem = { ...action.payload };
      state.totalPrice += newItem.price;

      const newCart = {
        ...cartStorage.Get(),
        itemsInCart: state.items.push(newItem),
        totalPrice: state.totalPrice + newItem.price,
        itemsInCart: state.items.length,
      };

      console.log(newCart);
      cartStorage.Save(newCart);

      const indexItem = state.items.findIndex(
        (i) => i.itemId === newItem.itemId
      );
      if (indexItem >= 0) {
        state.items[indexItem] = {
          ...newItem,
          quantity: state.items[indexItem].amount + 1,
        };
        return;
      }

      state.items.push(newItem);
    });
  },
});

const { reducer, actions } = cart;

export const { addCart, toggleCard } = actions;
export default reducer;
