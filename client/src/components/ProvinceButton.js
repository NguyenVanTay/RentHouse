/** @format */

import React, { memo } from "react";
import { location } from "../utils/constant";
const ProvinceButton = ({ name, image }) => {
  return (
    <div className="bg-white  text-blue-600 cursor-pointer hover:text-orange-600 shadow-md rounded-b-md">
      <img
        className="w-[220px] h-[110px] object-cover rounded-t-md "
        src={image}
        alt={name}
      ></img>
      <div className="flex justify-center items-center px-2 py-4">
        <p className="  font-bold text-center">{name}</p>
      </div>
    </div>
  );
};

export default memo(ProvinceButton);
