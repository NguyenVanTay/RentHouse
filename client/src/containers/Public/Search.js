/** @format */

import React from "react";
import { Button, SearchItem } from "../../components";
import { Icon } from "@iconify/react";
const Search = () => {
  return (
    <div className=" w-[80%] mx-auto h-[60px] p-[10px] bg-secondary3 rounded-md flex items-center justify-around gap-4 ">
      <SearchItem
        text={"House, Apartment & Unit"}
        IconBefore={<Icon icon={"mdi:building"}></Icon>}
        IconAfter={<Icon icon={"cil:delete"}></Icon>}
      />
      <SearchItem
        text={"Region"}
        IconBefore={<Icon icon={"ion:location-outline"}></Icon>}
        IconAfter={<Icon icon={"ri:arrow-right-s-line"}></Icon>}
      />
      <SearchItem
        text={"Price"}
        IconBefore={<Icon icon={"tabler:report-money"}></Icon>}
        IconAfter={<Icon icon={"ri:arrow-right-s-line"}></Icon>}
      />
      <SearchItem
        text={"Acreage"}
        IconBefore={<Icon icon={"radix-icons:ruler-square"}></Icon>}
        IconAfter={<Icon icon={"ri:arrow-right-s-line"}></Icon>}
      />
      <button className="px-4 py-2 bg-secondary1 flex  w-full items-center justify-center gap-2">
        <Icon
          icon={"material-symbols:search"}
          width={24}
          height={24}
          color="white"
        ></Icon>
        <p className="font-bold text-white">Search</p>
      </button>
    </div>
  );
};

export default Search;
