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
  const cities = [
    { value: "Tokyo" },
    { value: "Sapporo" },
    { value: "Kyoto" },
    { value: "Hirosima" },
    { value: "Yokohama" },
  ];
  const districts = [
    { value: "Ishikari" },
    { value: "Teshio" },
    { value: "Tokachi" },
    { value: "Abuta" },
    { value: "Yufutsu" },
  ];
  const lengthArea = [
    { value: "1000m2" },
    { value: "1000m2 - 2000m2" },
    { value: "2000m2 - 3000m2" },
  ];
  useEffect(() => {
    dispatch(actions.getPrices());
    dispatch(actions.getAreas());
  }, []);

  return (
    <div className=" w-full flex flex-col gap-3">
      <div className="">
        <p className="text-xl font-bold">Explore all things property</p>
      </div>
      <Province />

      <div className="w-full flex gap-4">
        <div className="w-[70%] mx-auto">
          <List
          // page={params.get("page")}
          />
          <Pagination
          // age={params.get("page")}
          />
        </div>

        <div className="w-[30%]   flex flex-col gap-4 items-center">
          <ItemSidebar content={cities} title={"City"} />

          <ItemSidebar content={districts} title={"District"} isDouble={true} />

          <ItemSidebar
            content={lengthArea}
            title={"Land area"}
            isDouble={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
