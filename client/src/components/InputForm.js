/** @format */

import React from "react";

const InputForm = (props) => {
  const { label, type } = props;
  return (
    <div>
      <div className="">
        <p className="pb-1">{label}</p>
        <input
          className="outline-none bg-[#e8f0fe] rounded-md p-2 w-full"
          type={`${type}`}
          id="phone"
        ></input>
      </div>
    </div>
  );
};

export default InputForm;
