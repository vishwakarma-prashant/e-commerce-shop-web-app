import React from "react";
import Authentication from "./Authentication";
import { useSelector } from "react-redux";
import Home from "./Home";

function Main() {
  const { isLogin } = useSelector((state) => state.user);

  return (
    <div>
      {" "}
      <Authentication />
    </div>
  );
}

export default Main;
