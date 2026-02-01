import React from "react";

function Input({
  label,
  inputType,
  placeholderText,
  value,
  onChange, // adding functionality to change value for future
  required = false,
  id,
  name,
  autocomplete = "off",
}) {
  return (
    <div className="relative rubik-font ">
      <label
        className="absolute z-100  bg-[#F7F8F9] left-[9px] bottom-[30px] text-[#6C25FF] leading-[17px] text-[13px]  py-[2px] w-[103px] pl-[5px]"
        htmlFor={id}
      >
        {label}
        {required && <span className="text-red-500 ml-[2px]">*</span>}
      </label>
      <input
        name={name}
        id={id}
        type={inputType}
        placeholder={placeholderText}
        value={value}
        onChange={onChange}
        autoComplete={autocomplete}
        className="rounded-[6px] h-[40px] w-full border-1 border-[#CBCBCB] px-[14px] text-sm text-[#1D2226] placeholder:text-[#919191] focus:border-[#6C25FF] focus:outline-none "
      />
    </div>
  );
}

export default Input;
