/** @format */

import React, { memo } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
const PageNumber = ({ text, currentPage, setCurentPage, icon, type }) => {
  const navigate = useNavigate();
  const notActive =
    "w-[46px] h-[48px] flex items-center justify-center bg-white hover:bg-gray-400  hover:text-white rounded-md  ";
  const active =
    "w-[46px] h-[48px] text-white flex items-center justify-center bg-[#e13427] hover:opacity-90 rounded-md ";
  const handleChangePage = () => {
    if (!(text === "...")) {
      setCurentPage(+text);
      navigate({
        pathname: "/",
        search: createSearchParams({
          page: text,
        }).toString(),
      });
    }
  };
  return (
    <div
      className={
        +text === +currentPage
          ? `${active} ${text === "..." ? "" : "cursor-pointer"}`
          : `${notActive} ${text === "..." ? "" : "cursor-pointer"}`
      }
      onClick={() => handleChangePage()}
    >
      {icon || text}
    </div>
  );
};

export default memo(PageNumber);
