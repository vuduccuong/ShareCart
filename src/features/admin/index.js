import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import GeneratePage from "./pages";

const GenerateRestaurant = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.url}`} component={GeneratePage} />
    </Switch>
  );
};

export default GenerateRestaurant;
