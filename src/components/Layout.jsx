import React from "react";
import { Outlet } from "react-router-dom";
import {
  ScrollToTop,
  NavigationComponent,
  FooterSection,
} from "../components/ExportComponents";
const Layout = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <ScrollToTop />
      <NavigationComponent />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterSection />
    </div>
  );
};

export default Layout;
