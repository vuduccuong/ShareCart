import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../features/restaurant/pages/order/orderSlice";
import customerReducer from "../features/restaurant/pages/home/customerSlice";
import adminReducer from "../features/admin/adminSlice";
// import cartReducer from "../features/ShopingCart/shopping-cart-slice";
// import menuReducer from "../features/Admin/pages/Menu/menu-slide";

const rootReducer = {
  order: orderReducer,
  customer: customerReducer,
  admin: adminReducer,
  //   cart: cartReducer,
  //   menu: menuReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
