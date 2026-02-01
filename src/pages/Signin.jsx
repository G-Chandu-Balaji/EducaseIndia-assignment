import React, { useState } from "react";
import Input from "../component/Input";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email.trim() !== "" && password.trim() !== "";
  return (
    <div className="px-[20px] pt-[40px]  w-full h-full bg-[#F7F8F9] mx-auto flex flex-col justify-start  gap-[33px] rubik-font">
      <div className="text-[#1D2226] text-left gap-3.5 flex flex-col   ">
        <h2 className=" text-[28px] tracking-normal  font-medium leading-[36px] w-[188px] cursor-default ">
          Signin to your PopX account
        </h2>
        <p className="text-lg opacity-60 cursor-default ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>
      <div className=" flex flex-col gap-[23px] ">
        <Input
          id="email"
          name="userEmail"
          inputType="email"
          label="Email Address"
          placeholderText="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="new-email"
        />
        <Input
          id="password"
          name="userPassword"
          inputType="password"
          label="Password"
          placeholderText="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        disabled={!isFormValid}
        className={` text-white text-base py-[13.84px] rounded-[6px] font-medium -mt-[9px] 
          ${
            isFormValid
              ? "bg-[#6C25FF] cursor-pointer  hover:bg-[#7A3CFF] transition-colors transition-200"
              : "bg-[#CBCBCB] cursor-not-allowed"
          }
          `}
        onClick={() => navigate("/profile")}
      >
        Login
      </button>
    </div>
  );
}
