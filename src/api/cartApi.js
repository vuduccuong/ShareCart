import { baseAPI } from "./baseApi";

export const createCartAPI = `${baseAPI}/Cart/create`;

export const getCartByCustomerAPI = (customerId) =>
  `${baseAPI}/Cart/cart-by-customer?customerId=${customerId}`;

export const addCartAPI = `${baseAPI}/Cart/add/item`;

export const submitCartAPI = `${baseAPI}/Cart/submit`;
