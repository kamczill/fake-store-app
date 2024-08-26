import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <div className="w-full min-h-full">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
