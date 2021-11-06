import { baseAPI } from "./baseApi";

export const customerAPI = `${baseAPI}/customer`;

export const registerAPI = `${customerAPI}/register`;

export const loginAPI = `${customerAPI}/login`;

export const deleteAPI = `${customerAPI}/delete`;

