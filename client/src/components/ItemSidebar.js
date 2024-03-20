/** @format */

import React, { memo } from "react";
import { Icon } from "@iconify/react";
const ItemSidebar = ({ title, content, isDouble }) => {
  return (
    <div className="bg-white p-4 rounded-md w-full">
      <h3 className="font-semibold text-lg mb-4">{title} </h3>
      {!isDouble && (
        <div className="flex flex-col gap-2">
          {content?.length &&
            content.map((item, index) => {
              return (
                <div
                  className="flex gap-2 items-center cursor-pointer hover:text-orange-500 border-b border-dashed border-gray-200 pb-1"
                  key={item.code}
                >
                  <Icon icon={"ooui:next-ltr"} className="w-3 h-3"></Icon>
                  <p className="">{item.value}</p>
                </div>
              );
            })}
        </div>
      )}
      {isDouble && (
        <div className="flex flex-col gap-2">
          {content?.length &&
            content.map((item, index) => {
              return (
                <div
                  className="flex gap-2 items-center cursor-pointer hover:text-orange-500 border-b border-dashed border-gray-200 pb-1"
                  key={item.code}
                >
                  <Icon icon={"ooui:next-ltr"} className="w-3 h-3"></Icon>
                  <p className="">{item.value}</p>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default memo(ItemSidebar);
