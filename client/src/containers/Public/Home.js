/** @format */

import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Navigation, Search } from "./index";


const Home = () => {
  return (
    <div className="w-full m-auto h-full">
      <Header />
      <Navigation />
      {/* <Search /> */}
      <div className="w-[80%] mx-auto flex gap-[5px] items-center my-6">
        <input className="p-4 w-full" placeholder="Input search text ..."/>
        <button className="bg-secondary2 text-white p-4 rounded-lg">Submit</button>
      </div>

      <div className="w-4/5 mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
