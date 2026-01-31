import React from "react";

function Input({ label, inputType, placeholderText, value = "" }) {
  return (
    <div className="relative rubik-font ">
      <label className="absolute z-100  bg-[#F7F8F9] left-[9px] bottom-[30px] text-[#6C25FF] leading-[17px] text-[13px]  py-[2px] w-[103px] pl-[5px]">
        {label}
      </label>
      <input
        type={inputType}
        placeholder={placeholderText}
        defaultValue={value}
        className="rounded-[6px] h-[40px] w-full border-1 border-[#CBCBCB] px-[14px] text-sm text-[#1D2226] placeholder:text-[#919191]  "
      />
    </div>
  );
}

export default Input;
