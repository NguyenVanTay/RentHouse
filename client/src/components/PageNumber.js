/** @format */

import React, { memo } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
const PageNumber = ({ text, currentPage, setCurentPage, icon, type }) => {
  const navigate = useNavigate();
  const notActive =
    "w-[46px] h-[48px] flex items-center justify-center bg-white hover:bg-gray-400  hover:text-white rounded-md  cursor-pointer";
  const active =
    "w-[46px] h-[48px] text-white flex items-center justify-center bg-[#e13427] hover:bg-gray-400   rounded-md  cursor-pointer";
  const handleChangePage = () => {
    setCurentPage(+text);
    navigate({
      pathname: "/",
      search: createSearchParams({
        page: text,
      }).toString(),
    });
  };
  return (
    <div
      className={+text === +currentPage ? active : notActive}
      onClick={() => handleChangePage()}
    >
      {icon || text}
    </div>
  );
};

export default memo(PageNumber);
