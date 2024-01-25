import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartButton from "./CartButton";
import LogoutButton from "./LogoutButton";

function Header() {
  const { username } = useSelector((state) => state.user);

  return (
    <div className=" hidden font-bold lg:flex justify-between items-center  ">
      <h2>Welcome :{username} </h2>
      <ul className="flex  p-3  ">
        <li className="bg-transparent shadow-black  shadow-lg border-2 w-max px-3 mx-3 hover:bg-green-600 rounded-lg my-3">
          <Link to={"/home"}>Home</Link>
        </li>
        <li className="bg-transparent  shadow-black shadow-lg border-2 w-max px-3 mx-3 rounded-lg my-3 hover:bg-green-600">
          <Link to={"/About"}>About</Link>
        </li>
        <li className="bg-transparent shadow-lg shadow-black  border-2 w-max px-3 mx-3 rounded-lg my-3 hover:bg-green-600 ">
          <CartButton />
        </li>
        <li className="bg-black shadow-xl   text-white border-2 shadow-black w-max px-3 mx-3 rounded-lg my-3 hover:bg-green-600 ">
          <LogoutButton />
        </li>
      </ul>
    </div>
  );
}

export default Header;
