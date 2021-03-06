import React, { useLayoutEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import GenerateRestaurant from "../features/admin";
import MainPage from "../features/restaurant";
import HomePage from "../features/restaurant/pages/home";
import LoginRestaurant from "../features/restaurant/pages/home/login";
import RegisterPage from "../features/restaurant/pages/home/register";

import PrivateRoute from "../utils/protectedRouter";

const App = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginRestaurant} />
      <Route exact path="/register" component={RegisterPage} />
      <Route path="/orders" component={MainPage} />

      <Route path="/admin" component={GenerateRestaurant} />
    </Switch>
  );
};

export default App;
