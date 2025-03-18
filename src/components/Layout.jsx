import React from "react";
import { Outlet } from "react-router-dom";
import {
  ScrollToTop,
  NavigationComponent,
} from "../components/ExportComponents";
const Layout = () => {
  return (
    <div className="relative">
      <ScrollToTop />
      <NavigationComponent />
      <Outlet />
    </div>
  );
};

export default Layout;
