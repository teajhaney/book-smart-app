import React from "react";
import { Outlet } from "react-router-dom";
import {
  ScrollToTop,
  NavigationComponent,
  FooterSection,
} from "../components/ExportComponents";
const Layout = () => {
  return (
    <div className="relative">
      <ScrollToTop />
      <NavigationComponent />
      <Outlet />
      <FooterSection />
    </div>
  );
};

export default Layout;
