/** @format */

import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import { formatVietnameseToString } from "../../utils/Common/formatStringVietnamese";
const notActive = "hover:bg-secondary2 px-4 h-full flex items-center ";
const active =
  "hover:bg-secondary2 px-4 h-full flex items-center  bg-secondary2";
const Navigation = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(actions.getCategories());
  }, []);

  return (
    <div className="w-full h-[50px] bg-secondary1 text-white my-2">
      <div className="w-[80%] mx-auto flex  items-center text-lg font-bold h-full">
        <NavLink
          to={`/`}
          className={({ isActive }) => (isActive ? active : notActive)}
        >
          Trang Chủ
        </NavLink>
        {categories?.length > 0 &&
          categories.map((item) => {
            {
              return (
                <div
                  className="h-full flex justify-center items-center"
                  key={item.code}
                >
                  <NavLink
                    to={`${formatVietnameseToString(item.value)}`}
                    className={({ isActive }) =>
                      isActive ? active : notActive
                    }
                  >
                    {item.value}
                  </NavLink>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default Navigation;
