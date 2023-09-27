/** @format */

import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
const Home = () => {
  return (
    <div className="w-full m-auto h-full">
      <Header />
      <div className="w-full">
        <Navigation />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
