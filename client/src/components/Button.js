/** @format */

import React, { memo } from "react";

const Button = ({
  text,
  textColor,
  bgColor,
  hoverStyle,
  icon,
  onclick,
  fullwidth,
}) => {
  return (
    <button
      type="button"
      className={`p-2 ${textColor} ${bgColor} ${
        fullwidth && "w-full"
      } outline-none  rounded-md ${hoverStyle} flex items-center gap-x-1 justify-center cursor-pointer`}
      onClick={onclick}
    >
      {text}
      {icon}
    </button>
  );
};

export default memo(Button);
