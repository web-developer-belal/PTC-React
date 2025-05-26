import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div className="mb-16 p-4">
        <Outlet></Outlet>
        {children}
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
