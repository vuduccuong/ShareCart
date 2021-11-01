import React from "react";
import { Redirect, Route } from "react-router-dom";
import { adminAuth } from "../_storage/storage";

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(rest);
  console.log(!!adminAuth.isAuth());
  return (
    <Route
      {...rest}
      render={(props) => {
        return !!adminAuth.isAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/admin/login",
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
