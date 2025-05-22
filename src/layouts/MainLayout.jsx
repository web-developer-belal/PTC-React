import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      {children}
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
