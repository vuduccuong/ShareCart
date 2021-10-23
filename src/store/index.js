import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../features/restaurant/pages/order/orderSlice";
// import cartReducer from "../features/ShopingCart/shopping-cart-slice";
// import menuReducer from "../features/Admin/pages/Menu/menu-slide";

import userAuthReducer from '../auth/authSlice';

const rootReducer = {
  order: orderReducer,
  userAuth: userAuthReducer,
  //   cart: cartReducer,
  //   menu: menuReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
