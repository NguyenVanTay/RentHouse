/** @format */

import React, { memo } from "react";

const SearchItem = ({ IconBefore, IconAfter, text }) => {
  return (
    <div className="bg-white py-2 px-4 w-full rounded-sm text-gray-400 text-sm flex items-center  justify-between cursor-pointer ">
      <div className="flex items-center justify-start gap-2">
        {IconBefore}

        <p className=" w-full overflow-hidden text-ellipsis whitespace-nowrap">
          {text}
        </p>
      </div>
      {IconAfter}
    </div>
  );
};

export default memo(SearchItem);
