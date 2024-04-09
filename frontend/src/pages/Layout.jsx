import React from "react";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex flex-1">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
