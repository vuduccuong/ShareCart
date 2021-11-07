import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";
import NotFound from "../../components/NotFound";
import { customerStorage } from "../../_storage/storage";
import { getCartByCustomer } from "./pages/cart/shopping-cart-slice";
import OrderPage from "./pages/order";
import { getAllProduct } from "./pages/order/orderSlice";

const MainPage = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  dispatch(getAllProduct());

  const customer = customerStorage.Get();
  getCartByCustomer(customer.customerId);

  return (
    <Switch>
      <Redirect exact from={match.url} to={`${match.url}/salad`} />

      <Route exact path={`${match.url}/:menuType`} component={OrderPage} />

      <Route component={NotFound} />
    </Switch>
  );
};

export default MainPage;
