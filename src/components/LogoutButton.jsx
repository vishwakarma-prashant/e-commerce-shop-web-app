import React, { useState } from "react";
import { userlogout } from "../appwrite/userConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserData } from "../features/userReducer";
function LogoutButton() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function logOutUser() {
    const data = await userlogout();
    console.log(data);
  }
  return (
    <button
      onClick={() => {
        setLoader(true);
        logOutUser();
        dispatch(getUserData({ name: "", userId: "", isLogin: false }));
        navigate("/");
      }}
    >
      Logout {loader ? "..........." : ""}
    </button>
  );
}

export default LogoutButton;
