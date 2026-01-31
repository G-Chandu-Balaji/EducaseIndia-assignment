import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="px-[20px] pb-[41px]   w-[375px] h-screen bg-[#F7F8F9] mx-auto flex flex-col justify-end  gap-[29px] rubik-font">
      <div className="text-[#1D2226] text-left gap-y-2.5">
        <h2 className=" text-[28px] tracking-normal  font-medium">
          Welcome to PopX
        </h2>
        <p className="text-lg opacity-60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>
      <div className="flex flex-col gap-[10px] font-medium  ">
        <button
          className="py-[13.84px] bg-[#6C25FF] text-white text-base rounded-[6px] "
          onClick={() => navigate("/signup")}
        >
          Create Account
        </button>
        <button
          className="bg-[#6C25FF4B] text-[#1D2226] text-base py-[13.84px] rounded-[6px]"
          onClick={() => navigate("/signin")}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Home;
