import { baseAPI } from "./baseApi";

export const adminAPI = `${baseAPI}/Shop`;

export const adminRegisterAPI = `${adminAPI}/register`;

export const adminLoginAPI = `${adminAPI}/login`;

export const adminDeleteAPI = `${adminAPI}/delete`;

export const adminGetByIdAPI = (id) => `${adminAPI}/${id}`;

export const adminGetAPI = `${adminAPI}/all`;

export const itemAPI = `${baseAPI}/Item/create`;

export const updateDeleteItemAPI = `${baseAPI}/Item`;
