import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="bg-slate-100 h-screen w-full p-2 max-w-6xl m-auto "
    >
      <Outlet />
    </div>
  );
}

export default Layout;
