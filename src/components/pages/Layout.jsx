import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

const Layout = () => {
  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
      <Header />
      <Outlet />
      
    </div>
  );
};

export default Layout;