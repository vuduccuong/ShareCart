import { localKey } from "../utils/localKey";

export const customerStorage = {
  Save: (userInfo) =>
    localStorage.setItem(localKey.USER_AUTH, JSON.stringify(userInfo)),
  Remove: () => localStorage.setItem(localKey.USER_AUTH, JSON.stringify({})),
  Get: () => {
    const strInfo = localStorage.getItem(localKey.USER_AUTH);
    return JSON.parse(strInfo) || {};
  },
};

export const customerAuth = {
  isAuth: () => {
    const strInfo = localStorage.getItem(localKey.USER_AUTH);
    return !!strInfo && JSON.parse(strInfo).customerId;
  },
};

export const adminStorage = {
  Save: (userInfo) =>
    localStorage.setItem(localKey.ADMIN_AUTH, JSON.stringify(userInfo)),
  Remove: () => localStorage.setItem(localKey.ADMIN_AUTH, JSON.stringify({})),
  Get: () => {
    const strInfo = localStorage.getItem(localKey.ADMIN_AUTH);
    if (strInfo) return JSON.parse(strInfo);

    return {};
  },
};

export const adminAuth = {
  isAuth: () => {
    const strInfo = localStorage.getItem(localKey.ADMIN_AUTH);
    return !!strInfo && JSON.parse(strInfo).shopId;
  },
};

export const cartStorage = {
  Get: () => {
    var cartInfo = localStorage.getItem(localKey.CART_INFO);
    return !!cartInfo && JSON.parse(cartInfo);
  },
  Save: (cartInfo) => {
    localStorage.setItem(localKey.CART_INFO, JSON.stringify(cartInfo));
  },
  Remove: () => localStorage.setItem(localKey.CART_INFO, JSON.stringify({})),
};
