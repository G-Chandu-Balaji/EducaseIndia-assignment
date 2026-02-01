import React from "react";
import photo from "../assets/photo.png";
import camera from "../assets/camera.svg";

function Profile() {
  return (
    <div className="   w-full h-full bg-[#F7F8F9] mx-auto flex flex-col justify-start pb-[30px]  rubik-font  ">
      <div className="text-[18px] bg-white text-[#1D2226] shadow-[0_3px_6px_#00000007] leading-[21px] px-[15px] text-left pt-[27px] pb-[19px] capitalize">
        Account Settings
      </div>
      <div className="px-[20px] pt-[30px] flex flex-col gap-[30px] pb-[20px] border-b-1 border-dashed  border-[#CBCBCB] ">
        <div className="flex gap-[20px]">
          <div className="relative  h-[76px] w-[76px]">
            <img src={photo} alt="" className="h-full w-full" />
            <label className="absolute  -right-1 bottom-1 cursor-pointer">
              <img src={camera} alt="" />
              <input hidden type="file" />
            </label>
          </div>
          <div className="flex flex-col gap-[6px]">
            <h3 className="font-medium text-[15px] leading-[19px]">
              Marry Doe
            </h3>
            <h4 className="text-[14px] leading-[19px]">Marry@Gmail.Com</h4>
          </div>
        </div>
        <div className=" text-[14px] leading-[22px] capitalize">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </div>
      </div>
      <div className="border-dashed  border-[#CBCBCB] border-b-1 mt-auto  " />
    </div>
  );
}

export default Profile;
