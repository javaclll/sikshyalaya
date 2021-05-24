import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import configs from "../utils/configs";
import { get } from "idb-keyval";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  useEffect(() => {
    get("user")
      .then((value) => {
        if (!value) {
          setIsLoggedIn(false);
        } else {
          setIsLoggedIn(true);
        }
      })
      .catch((e) => {
        console.log(e);
        setIsLoggedIn(false);
      });
  });

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn === true || configs.PRIVATE_ROUTE_ACCESS ? (
          <Component {...props} />
        ) : isLoggedIn === false ? (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        ) : (
          <></>
        )
      }
    />
  );
};

export default PrivateRoute;
