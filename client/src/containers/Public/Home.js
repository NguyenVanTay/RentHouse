/** @format */

import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
const Home = () => {
  return (
    <div className="w-full m-auto h-full">
      <Header />
      <Navigation />
      <div className="w-4/5 mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
