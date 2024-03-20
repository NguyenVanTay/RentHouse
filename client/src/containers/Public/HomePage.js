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
  console.log(areas);

  return (
    <div className=" w-full flex flex-col gap-3">
      <div className="">
        <p className="text-xl font-bold">
          Kênh thông tin Phòng Trọ số 1 Việt Nam
        </p>
        <p className="">
          Kênh thông tin Phòng Trọ số 1 Việt Nam - Website đăng tin cho thuê
          phòng trọ, nhà nguyên căn, căn hộ, ở ghép nhanh, hiệu quả với 100.000+
          tin đăng và 2.500.000 lượt xem mỗi tháng.
        </p>
      </div>
      <Province />

      <div className="w-full flex gap-4">
        <div className="w-[70%] ">
          <List page={params.get("page")} />
          <Pagination page={params.get("page")} />
        </div>

        <div className="w-[30%]   flex flex-col gap-4 items-center">
          <ItemSidebar content={categories} title={"Danh sách cho thuê"} />
          <ItemSidebar
            content={prices}
            title={"Xem theo giá"}
            isDouble={true}
          />

          <ItemSidebar
            content={areas}
            title={"Xem theo diện tích"}
            isDouble={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
