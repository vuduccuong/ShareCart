import React from "react";
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";
import NotFound from "../../components/NotFound";
import OrderPage from "./pages/order";

const MainPage = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Redirect exact from={match.url} to={`${match.url}/salad`} />

      <Route exact path={`${match.url}/:menuType`} component={OrderPage} />

      <Route component={NotFound} />
    </Switch>
  );
};

export default MainPage;
