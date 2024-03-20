/** @format */

import React, { useCallback } from "react";
import logo from "../../assets/Logo.png";
import { Button } from "../../components";
import { Icon } from "@iconify/react";
import { useNavigate, Link } from "react-router-dom";
import { path } from "../../utils/constant";
import { useSelector, useDispatch } from "react-redux";

import * as actions from "../../store/actions";
const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleNavigate = useCallback((flag) => {
    navigate(path.LOGIN, { state: { flag } });
  }, []);
  return (
    <>
      <div className="w-[80%] mx-auto flex items-center justify-between  ">
        <Link to={"/"}>
          <img
            src={logo}
            className="object-contain h-[100px] w-[200px]"
            alt="logo"
          />
        </Link>

        <div className="flex items-center gap-x-2  ">
          {!isLoggedIn && (
            <div className="flex items-center gap-x-2">
              <Button
                text={"Sign In"}
                textColor="text-white"
                bgColor="bg-secondary1"
                hoverStyle="hover:underline"
                icon=<Icon
                  icon={"material-symbols:login"}
                  width={24}
                  height={24}
                ></Icon>
                onclick={() => handleNavigate(false)}
              />
              <Button
                text={"Sign Up"}
                textColor="text-white"
                bgColor="bg-secondary1"
                hoverStyle="hover:underline"
                icon=<Icon
                  icon={"mdi:register-outline"}
                  width={24}
                  height={24}
                ></Icon>
                onclick={() => handleNavigate(true)}
              />
            </div>
          )}
          {isLoggedIn && (
            <div className=" flex items-center gap-x-2 ">
              <p className="">Profile</p>

              <Button
                text={"Sign Out"}
                textColor="text-white"
                bgColor="bg-secondary1"
                hoverStyle="hover:underline"
                icon=<Icon
                  icon={"material-symbols:login"}
                  width={24}
                  height={24}
                ></Icon>
                onclick={() => dispatch(actions.logout())}
              />
            </div>
          )}          
        </div>
      </div>
    </>
  );
};

export default Header;
