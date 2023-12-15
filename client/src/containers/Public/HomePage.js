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
