import React from "react";
import { useSelector } from "react-redux";

function Auth({ children }) {
  const { isLogin } = useSelector((state) => state.user);
    // console.log(isLogin);
  return <> {isLogin ? children : <p>Please Login</p>}</>;
}

export default Auth;
