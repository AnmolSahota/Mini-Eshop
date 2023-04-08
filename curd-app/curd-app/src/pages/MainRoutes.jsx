import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import Admin from "./Admin";
import EditProduct from "./EditProduct";
import HomePage from "./HomePage";
import Login from "./Login";
function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }
      ></Route>
      <Route path="*" element={<h2>Page Not Found</h2>} />
      <Route
        path="/edit/:id"
        element={
          <PrivateRoute>
            <EditProduct />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default MainRoutes;
