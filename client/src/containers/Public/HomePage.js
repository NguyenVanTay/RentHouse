/** @format */

import React, { useEffect } from "react";
import { Province, ItemSidebar } from "../../components";
import { List, Pagination } from "./index";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";
const Homepage = () => {
  const [params] = useSearchParams();
  const { categories, prices, areas } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getPrices());
    dispatch(actions.getAreas());
  }, []);

  return (
    <div className=" w-full flex flex-col gap-3">
      <div className="">
        <p className="text-xl font-bold">
          Explore all things property
        </p>
      </div>
      <Province />

      <div className="w-full flex gap-4">
        <div className="w-[80%] mx-auto">
          <List
          // page={params.get("page")} 
          />
          <Pagination
          // age={params.get("page")} 
          />
        </div>

        {/* <div className="w-[30%]   flex flex-col gap-4 items-center">
          <ItemSidebar content={categories} title={"Rental List"} />
          <ItemSidebar
            content={prices}
            title={"Sort by Price"}
            isDouble={true}
          />

          <ItemSidebar
            content={areas}
            title={"Sort by Area"}
            isDouble={true}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Homepage;
