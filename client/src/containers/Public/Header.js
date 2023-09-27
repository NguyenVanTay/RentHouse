/** @format */

import React, { useCallback } from "react";
import logo from "../../assets/Logo.png";
import { Button } from "../../components";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { path } from "../../utils/constant";
const Header = () => {
  const navigate = useNavigate();

  const goLogin = useCallback(() => {
    navigate(path.LOGIN);
  }, []);
  return (
    <>
      <div className="w-[80%] mx-auto flex items-center justify-between  ">
        <img
          src={logo}
          className="object-contain h-[100px] w-[200px]"
          alt="logo"
        />
        <div className="flex items-center gap-x-2 ">
          <Button
            text={"Yêu Thích"}
            textColor="text-white"
            bgColor="bg-secondary2"
            hoverStyle="hover:underline"
            icon=<Icon icon={"mdi:heart-outline"} width={24} height={24}></Icon>
          />

          <Button
            text={"Đăng nhập"}
            textColor="text-white"
            bgColor="bg-secondary1"
            hoverStyle="hover:underline"
            icon=<Icon
              icon={"material-symbols:login"}
              width={24}
              height={24}
            ></Icon>
            onclick={goLogin}
          />
          <Button
            text={"Đăng ký "}
            textColor="text-white"
            bgColor="bg-secondary1"
            hoverStyle="hover:underline"
            icon=<Icon
              icon={"mdi:register-outline"}
              width={24}
              height={24}
            ></Icon>
          />
          <Button
            text={"Đăng ký mới"}
            textColor="text-white"
            bgColor="bg-secondary2"
            hoverStyle="hover:underline"
            icon=<Icon icon={"ei:plus"} width={24} height={24}></Icon>
          />
        </div>
      </div>
    </>
  );
};

export default Header;
