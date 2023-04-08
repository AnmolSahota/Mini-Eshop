import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
function PrivateRoute({ children }) {
  let state = useSelector((state) => {
    return state.authReducer.auth;
  });
  let location = useLocation();
  return state ? (
    children
  ) : (
    <Navigate to="/login" state={location.pathname} replace={true} />
  );
}

export default PrivateRoute;
