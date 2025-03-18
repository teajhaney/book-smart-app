import React from "react";
import { Outlet } from "react-router-dom";
import { ScrollToTop } from "../components/ExportComponents";
const Layout = () => {
  return (
    <div>
      <ScrollToTop />
      <Outlet />
    </div>
  );
};

export default Layout;
