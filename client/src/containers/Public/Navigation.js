/** @format */

import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import { apiGetCategories } from "../../services/category";
import { formatVietnameseToString } from "../../utils/Common/formatStringVietnamese";
const notActive = "hover:bg-secondary2 px-4 h-full flex items-center ";
const active =
  "hover:bg-secondary2 px-4 h-full flex items-center  bg-secondary2";
const Navigation = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await apiGetCategories();

      if (response?.data.err === 0) {
        setCategories(response.data.response);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="w-full h-[50px] bg-secondary1 text-white my-2">
      <div className="w-[80%] mx-auto flex  items-center text-lg font-bold h-full">
        <NavLink
          to={`/`}
          className={({ isActive }) => (isActive ? active : notActive)}
        >
          Home
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
