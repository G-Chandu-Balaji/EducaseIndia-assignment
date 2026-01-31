import React from "react";
import Input from "../component/Input";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  return (
    <div className="px-[20px] pt-[40px]   w-[375px] h-screen bg-[#F7F8F9] mx-auto flex flex-col justify-start  gap-[31px] rubik-font">
      <h2 className="text-[#1D2226] text-left text-[28px] tracking-normal  font-medium leading-[36px] w-[188px]  ">
        Create your PopX account
      </h2>
      <div className="flex flex-col gap-[29px]">
        <Input
          inputType="text"
          label="Full Name"
          placeholderText="Enter full name"
          value="Marry Doe"
        />
        <Input
          inputType="text"
          label="Phone number"
          placeholderText="Enter Phone number"
          value="Marry Doe"
        />
        <Input
          inputType="text"
          label="Email address"
          placeholderText="Enter Email address"
          value="Marry Doe"
        />
        <Input
          inputType="text"
          label="Password"
          placeholderText="Enter Password"
          value="Marry Doe"
        />
        <Input
          inputType="text"
          label="Company name"
          placeholderText="Enter Company name"
          value="Marry Doe"
        />
      </div>

      <div>
        <p className="text-[13px] leading-[17px]">Are you an Agency?</p>
        <div className="flex gap-[23px] mt-[10px] ">
          <div className="flex items-center gap-[12px]">
            <input
              type="radio"
              name="isAgency"
              value="yes"
              className="border-1 border-[#642AF5] h-[22px] w-[22px] "
            />
            <label className="text-[#1D2226] text-[14px]">Yes</label>
          </div>
          <div className="flex items-center gap-[12px]">
            <input
              type="radio"
              name="isAgency"
              value="no"
              className="border-1 border-[#642AF5] h-[22px] w-[22px] "
            />
            <label className="text-[#1D2226] text-[14px]">No</label>
          </div>
        </div>
      </div>

      <button
        className="bg-[#6C25FF] text-white text-base py-[13.84px] rounded-[6px] font-medium mb-[30px]"
        onClick={() => navigate("/profile")}
      >
        Create Account
      </button>
    </div>
  );
}

export default Signup;
