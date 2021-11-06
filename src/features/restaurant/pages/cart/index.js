import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCard } from "./shopping-cart-slice";

const ShopingCart = () => {
  const items = useSelector((state) => state.cart.items);
  const totalMoney = items.reduce(
    (cacuMoney, currentItem) =>
      cacuMoney + currentItem.price * currentItem.quantity,
    0
  );
  const dispatch = useDispatch();
  const onCloseCardHandle = () => {
    dispatch(toggleCard());
  };

  return (
    <Fragment>
      <aside className="transform top-0 right-0 w-full md:w-2/5 shadow-2xl bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 -translate-x-0">
        <div className="p-8">
          <button
            className="bg-gray-200 py-2 px-6 rounded-full"
            onClick={onCloseCardHandle}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <main className="text-center font-bold">
            <i className="fas fa-shopping-basket fa-3x mx-auto mt-10"></i>
            <table className="table-auto mx-auto mt-10">
              <thead>
                <tr>
                  <th className="px-4 py-2">Item</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Price</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="border px-4 py-2">{item.name}</td>
                      <td className="border px-4 py-2">{item.quantity}</td>
                      <td className="border px-4 py-2">{item.price.toLocaleString('vi-VN',{style : 'currency', currency : 'VND'})}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="mt-5 text-lg">
              Total: 
              <span className="text-custom-yellow">
                {(Math.round(totalMoney * 100) / 100).toLocaleString('vi-VN', {style : 'currency', currency : 'VND'})}
              </span>
            </div>
            <button className="rounded-lg bg-custom-yellow px-4 py-2 font-bold mt-6">
              Order Pay
            </button>
          </main>
        </div>
      </aside>
    </Fragment>
  );
};

export default ShopingCart;
