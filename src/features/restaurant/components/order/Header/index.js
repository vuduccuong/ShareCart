import {
  faLongArrowAltLeft,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCard } from "../../../pages/cart/shopping-cart-slice";

const Header = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalMoney = items.reduce(
    (cacuMoney, currentItem) =>
      cacuMoney + currentItem.price * currentItem.quantity,
    0
  );
  const openCardHandle = () => {
    dispatch(toggleCard());
  };
  return (
    <Fragment>
      <div className="flex justify-center md:justify-end">
        <Link to="/" className="rounded-full bg-gray-200 py-2 px-6 mr-auto">
          <FontAwesomeIcon icon={faLongArrowAltLeft} />
        </Link>

        <button
          onClick={openCardHandle}
          className="rounded-full bg-white mr-2 py-2 px-3 shadow sm:block hidden cart"
        >
          <FontAwesomeIcon icon={faShoppingBasket} />   
          {items.length} items - 
          {totalMoney.toLocaleString('vi-VN', {style : 'currency', currency : 'VND'})}
        </button>
      </div>
      <button
        onClick={openCardHandle}
        className="rounded-full bg-white mr-2 py-2 px-3 shadow block sm:hidden mt-5 w-full cart"
      >
        <FontAwesomeIcon icon={faShoppingBasket} className="mr-3" />
        {items.length} items - {totalMoney.toLocaleString('vi-VN', {style : 'currency', currency : 'VND'})}
      </button>
    </Fragment>
  );
};

export default Header;
