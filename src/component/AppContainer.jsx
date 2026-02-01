import React from "react";
import { Outlet } from "react-router-dom";

function AppContainer() {
  return (
    <div className="w-[375px] min-h-screen h-[812px] mx-auto border-1 border-[#F7F8F9]  ">
      <Outlet />
    </div>
  );
}

export default AppContainer;
