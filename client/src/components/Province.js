/** @format */

import React from "react";
import { ProvinceButton } from "./index";
import { location } from "../utils/constant";
const Province = () => {
  return (
    <div className="flex justify-center gap-5 py-5 ">
      {location.map((item, index) => {
        return (
          <ProvinceButton
            name={item.name}
            image={item.urlImage}
            key={item.id}
          />
        );
      })}
    </div>
  );
};

export default Province;
