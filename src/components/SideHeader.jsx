import React from "react";
import CartButton from "./CartButton";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutButton from "./LogoutButton";

function SideHeader() {
  const { username } = useSelector((state) => state.user);
  return (
    <div className="font-bold text-white lg:hidden ">
      <h2>Welcome :{username} </h2>
      <ul className="flex flex-col p-3 ">
        <li className="bg-transparent border-2 w-max px-3  hover:bg-green-600 rounded-lg my-3">
          <Link to={"/home"}>Home</Link>
        </li>
        <li className="bg-transparent border-2 w-max px-3  rounded-lg my-3 hover:bg-green-600">
          <Link to={"/About"}>About</Link>
        </li>
        <li className="bg-transparent border-2 w-max px-3  rounded-lg my-3 hover:bg-green-600 ">
          <CartButton />
        </li>
        <li className="bg-black text-white border-2 w-max px-3  rounded-lg my-3 hover:bg-green-600 ">
          <LogoutButton />
        </li>
      </ul>
    </div>
  );
}

export default SideHeader;
