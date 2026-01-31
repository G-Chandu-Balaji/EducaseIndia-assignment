import React from "react";
import Input from "../component/Input";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();
  return (
    <div className="px-[20px] pt-[40px]   w-[375px] h-screen bg-[#F7F8F9] mx-auto flex flex-col justify-start  gap-[33px] rubik-font">
      <div className="text-[#1D2226] text-left gap-3.5 flex flex-col   ">
        <h2 className=" text-[28px] tracking-normal  font-medium leading-[36px] w-[188px] ">
          Signin to your PopX account
        </h2>
        <p className="text-lg opacity-60 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>
      <div className=" flex flex-col gap-[23px] ">
        <Input
          inputType="email"
          label="Email Address"
          placeholderText="Enter email address"
        />
        <Input
          inputType="password"
          label="Password"
          placeholderText="Enter password"
        />
      </div>
      <button
        className="bg-[#CBCBCB] text-white text-base py-[13.84px] rounded-[6px] font-medium -mt-[9px]"
        onClick={() => navigate("/profile")}
      >
        Login
      </button>
    </div>
  );
}
