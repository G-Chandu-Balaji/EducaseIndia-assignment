import React from "react";
import photo from "../assets/photo.png";
import camera from "../assets/camera.svg";

function Profile() {
  return (
    <div className="   w-[375px] h-screen bg-[#F7F8F9] mx-auto flex flex-col justify-start   rubik-font">
      <div className="text-[18px] bg-white text-[#1D2226] leading-[21px] px-[15px] text-left pt-[27px] pb-[19px] capitalize">
        Account Settings
      </div>
      <div className="px-[20px] pt-[30px] flex flex-col gap-y-[30px] pb-[20px] border-b-2 border-dashed  border-[#CBCBCB] ">
        <div className="flex gap-[20px]">
          <div className="relative  h-[76px] w-[76px]">
            <img src={photo} alt="" className="h-full w-full" />
            <img src={camera} alt="" className="absolute  right-0 bottom-0" />
          </div>
          <div className="gap-y-[6px]">
            <h3 className="font-medium text-[15px]">Marry Doe</h3>
            <h4 className="text-[14px]">Marry@Gmail.Com</h4>
          </div>
        </div>
        <div className=" text-[14px] leading-[22px] capitalize">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </div>
      </div>
    </div>
  );
}

export default Profile;
