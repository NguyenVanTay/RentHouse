/** @format */

import React from "react";
import { Province } from "../../components";
import { List, Pagination } from "./index";
import { useSearchParams } from "react-router-dom";

const Homepage = () => {
  const [params] = useSearchParams();
  // console.log(page.get(`page`));
  return (
    <div className=" w-full flex flex-col gap-3">
      <div className="">
        <p className="text-xl font-bold">
          Explore all things property
        </p>        
      </div>
      <Province />
      <div className="w-full flex gap-4">
        <div className="w-[70%] ">
          <List />
          <Pagination number={params.get("page")} />
        </div>

        <div className="w-[30%]  bg-slate-400 border-2 border-yellow-400">
          Siderbar
        </div>
      </div>
    </div>
  );
};

export default Homepage;
