import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useMainContext } from "../../Context";

const Routing = ({ routes = [], user = "/", noUser = "/login" }) => {
  const { isLogin } = useMainContext();
  return (
    <Routes>
      {routes.map((route, i) => {
        return (
          <Route
            path={route.path}
            element={
              route.user ? (
                isLogin() ? (
                  <route.layout props={route}>
                    <route.component props={route} />
                  </route.layout>
                ) : (
                  <Navigate to={noUser} replace />
                )
              ) : isLogin() ? (
                <Navigate to={user} replace />
              ) : (
                <route.layout props={route}>
                  <route.component props={route} />
                </route.layout>
              )
            }
          />
        );
      })}
    </Routes>
  );
};

export default Routing;
