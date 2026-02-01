import React from "react";
import Input from "../component/Input";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="px-[20px] pt-[40px]   w-full h-full bg-[#F7F8F9] mx-auto flex flex-col justify-start  pb-[30px] gap-[31px] rubik-font"
    >
      <h2 className="text-[#1D2226] text-left text-[28px] tracking-normal  font-medium leading-[36px] w-[188px] cursor-default ">
        Create your PopX account
      </h2>
      <div className="flex flex-col gap-[29px]">
        <Input
          inputType="text"
          label="Full Name"
          placeholderText="Enter full name"
          value="Marry Doe"
          required
        />
        <Input
          inputType="text"
          label="Phone number"
          placeholderText="Enter Phone number"
          value="Marry Doe"
          required
        />
        <Input
          inputType="text"
          label="Email address"
          placeholderText="Enter Email address"
          value="Marry Doe"
          required
        />
        <Input
          inputType="text"
          label="Password"
          placeholderText="Enter Password"
          value="Marry Doe"
          required
        />
        <Input
          inputType="text"
          label="Company name"
          placeholderText="Enter Company name"
          value="Marry Doe"
        />
      </div>

      <div className="-mt-[13px]">
        <p className="text-[13px] leading-[17px] ">
          Are you an Agency?<span className="text-red-500 ml-[2px]">*</span>
        </p>
        <div className="flex gap-[23px] mt-[10px] ">
          <div className="flex items-center gap-[12px]">
            <input
              type="radio"
              name="isAgency"
              value="yes"
              defaultChecked
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
        type="submit"
        className="bg-[#6C25FF]  hover:bg-[#7A3CFF] transition-colors transition-200 text-white text-base py-[13.84px] rounded-[6px] font-medium mt-auto cursor-pointer "
      >
        Create Account
      </button>
    </form>
  );
}

export default Signup;
