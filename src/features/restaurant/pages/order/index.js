import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import FoodList from "../../components/order/Food/food-list";
import Header from "../../components/order/Header";
import NavBar from "../../components/order/NavBar";
import TitlePage from "../../components/order/TitlePage";
import { loadOrder } from "./orderSlice";

const OrderPage = () => {
  const foods = useSelector((state) => state.order.foods);
  const { title, image } = useSelector((state) => state.order.titleInfo);
  const dispatch = useDispatch();
  const param = useParams();
  dispatch(loadOrder(param?.menuType));

  const onViewDetailHandle = (food) => {};
  const onCloseDetail = () => {};

  return (
    <div className={`text-gray-900 bg-gray-100 font-body h-full`}>
      <div className="pt-16 px-10 grid lg:grid-cols-5 pb-20">
        {/* {(isOpendCart || showDetail) && <Overlay />} */}
        <NavBar />
        <main className="lg:col-span-4">
          <Header />
          <div className="mt-16">
            <TitlePage image={image}>
              Ninja <span className="text-red-700">{title}</span>
            </TitlePage>
            <div className="mt-5 grid lg:grid-cols-3 sm:grid-cols-2 gap-16">
              <FoodList foods={foods} onViewDetail={onViewDetailHandle} />
            </div>
          </div>
        </main>
        {/* {isOpendCart && <ShopingCart />} */}
        {/* {showDetail && <Detail food={} closeHandle={onCloseDetail} />} */}
      </div>
    </div>
  );
};

export default OrderPage;
