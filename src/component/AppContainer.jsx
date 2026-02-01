import React from "react";
import { Outlet } from "react-router-dom";

function AppContainer() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-[375px]  h-[812px] mx-auto border-1 border-[#F7F8F9]  ">
        <Outlet />
      </div>
    </div>
  );
}

export default AppContainer;
