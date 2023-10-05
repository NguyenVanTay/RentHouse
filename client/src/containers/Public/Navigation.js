/** @format */

import React from "react";
import { Button } from "../../components";
import { NavLink } from "react-router-dom";
const nav = [
  { name: "Trang chủ", path: "home" },
  { name: "Cho thuê phòng trọ", path: "cho-thue-phong-tro" },
  { name: "Cho thuê nhà nguyên căn", path: "nha-cho-thue" },
  { name: "Cho thuê căn hộ", path: "cho-thue-can-ho" },
  { name: "Cho thuê mặt bằng", path: "cho-thue-mat-bang" },
];

const notActive = "hover:bg-secondary2 px-4 h-full flex items-center ";
const active =
  "hover:bg-secondary2 px-4 h-full flex items-center  bg-secondary2";
const Navigation = () => {
  return (
    <div className="w-screen h-[50px] bg-secondary1 text-white">
      <div className="w-[80%] mx-auto flex  items-center text-lg font-bold h-full">
        {nav?.length > 0 &&
          nav.map((item, index) => {
            return (
              <div
                className="h-full flex justify-center items-center"
                key={index}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? active : notActive)}
                >
                  {item.name}
                </NavLink>
              </div>
            );
          })}
        {/* <Button
          text="Trang chủ"
          textColor={"text-white font-bold"}
          hoverStyle={"hover:bg-secondary2 hover:font-bold"}
        />
        <Button
          text="Cho thuê phòng trọ"
          textColor={"text-white  font-bold"}
          hoverStyle={"hover:bg-secondary2 hover:font-bold"}
        />
        <Button
          text="Nhà cho thuê"
          textColor={"text-white font-bold"}
          hoverStyle={"hover:bg-secondary2 hover:font-bold"}
        />
        <Button
          text="Cho thuê căn hộ"
          textColor={"text-white font-bold"}
          hoverStyle={"hover:bg-secondary2 hover:font-bold"}
        /> */}
      </div>
    </div>
  );
};

export default Navigation;
