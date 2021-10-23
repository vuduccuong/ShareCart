import { createSlice } from "@reduxjs/toolkit";
import { allData } from "../../../../../fakeData";

const initialOrders = {
  foods: [],
  titleInfo: {},
};

const order = createSlice({
  name: "orders",
  initialState: initialOrders,
  reducers: {
    loadOrder: (state, action) => {
      const type = action.payload;
      const { data, pageInfo } = allData[type];
      state.foods = data;
      state.titleInfo = pageInfo;
    },
  },
});

const { reducer, actions } = order;

export const { loadOrder } = actions;

export default reducer;
