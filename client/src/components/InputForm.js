/** @format */

import React from "react";

const InputForm = (props) => {
  const {
    label,
    type,
    value,
    setValue,
    keyPayload,
    invalidFields,
    setInvalidFields,
  } = props;
  return (
    <div>
      <div className="">
        <p className="pb-1">{label}</p>
        <input
          className="outline-none bg-[#e8f0fe] rounded-md p-2 w-full"
          type={type || "text"}
          value={value}
          // đặt lại type để khi set value thì chỉ duy nhất input có type đó thây đổi.
          onChange={(e) =>
            setValue((prev) => ({ ...prev, [keyPayload]: e.target.value }))
          }
          onFocus={() => setInvalidFields([])}
        ></input>
        {invalidFields.length > 0 &&
          invalidFields.some((i) => i.name === keyPayload) && (
            <p className="text-red-400 text-sm italic">
              {invalidFields.find((i) => i.name === keyPayload)?.message}
            </p>
          )}
      </div>
    </div>
  );
};

export default InputForm;
