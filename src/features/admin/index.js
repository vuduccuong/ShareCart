import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import PrivateRoute from "../../utils/protectedRouter";
import LayoutAdmin from "./components/layout/layoutAdmin";
import DashBoardAdmin from "./pages/dashboard/dashboard";
import GeneratePage from "./pages/login";
import AdminRegisterPage from "./pages/register";

const GenerateRestaurant = () => {
  const adminAuth = useSelector(state => state.admin.adminAuth);

  return (
    <Switch>
      <Route
        path={`/admin`}
        render={() => {
          return (
            <Switch>
              <Route path="/admin/login" component={GeneratePage} />
              <Route path="/admin/register" component={AdminRegisterPage} />
              
              <LayoutAdmin admin={adminAuth}>
                <Switch>
                  <PrivateRoute
                    exact
                    path={`/admin`}
                    component={DashBoardAdmin}
                  />
                </Switch>
              </LayoutAdmin>
            </Switch>
          );
        }}
      />
    </Switch>
  );
};

export default GenerateRestaurant;
