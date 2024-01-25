import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import Signup from "./Signup";
import { userlogin, userSignUp } from "../../appwrite/userConfig";
import { Navigate, useNavigate } from "react-router-dom";
function Authentication() {
  const [isSignup, setIsSignup] = useState(true);
  const [error, setError] = useState(false);
  const [errormsg, setErrormsg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const handelSignupSubmit = async () => {
    setLoader(true);
    setError(false);
    let data;
    try {
      data = await userSignUp(email, name, password);

      // console.log(data);
      if (data) {
        if (data.$id) {
          setIsSignup(false);
          setLoader(false);
        }
      } else {
        setError(true);
        setErrormsg(data);
        setIsSignup(true);
        setLoader(false);
      }
    } catch (error) {
      console.log("error ...", error);
      setError(true);
      setErrormsg(error);
      setLoader(false);
    }

    setEmail("");
    setName("");
    setPassword("");
    setLoader(false);
  };

  const handelLoginSubmit = async () => {
    setLoader(true);
    setError(false);
    try {
      const data = await userlogin(email, password);

        if (data.$id) {
          setIsSignup(false);
          setLoader(false);
          navigate("/home");
        } else {
          setIsSignup(false);
          setError(true);
          setErrormsg(data);
          setIsSignup(true);
          setLoader(false);
        }
      
    } catch (error) {
      console.log("error ...", error);
      setError(true);
      setErrormsg(error);
      setLoader(false);
    }

    setEmail("");
    setName("");
    setPassword("");
    setLoader(false);
  };

  return (
    <div className="duration-200">
      <div className=" m-auto w-[90%] max-w-72 flex  justify-between bg-slate-800  text-white p-2 rounded-xl  ">
        <button
          onClick={() => {
            setError(false);
            setIsSignup(true);
          }}
          className={`${
            isSignup ? "border-[4px] border-gray-100" : " "
          } bg-orange-500 font-bold  px-4 py-1 rounded-3xl hover:bg-green-400 duration-100`}
        >
          SignUp
        </button>
        <button
          onClick={() => {
            setError(false);
            setIsSignup(false);
          }}
          className={`${
            !isSignup ? "border-[4px] border-gray-100" : " "
          } bg-sky-600 font-bold px-4 py-1 rounded-3xl hover:bg-green-400 duration-200`}
        >
          Login
        </button>
      </div>

      {loader ? (
        <h2 className="text-lg  font-bold text-center text-blue-600 animate-ping">
          Loading............
        </h2>
      ) : null}

      {error ? <p>{errormsg.toString()}</p> : null}
      <div className="m-2  ">
        {isSignup ? (
          <Signup
            setError={setError}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handelSignupSubmit={handelSignupSubmit}
          />
        ) : (
          <Login
            setError={setError}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handelLoginSubmit={handelLoginSubmit}
          />
        )}
      </div>
    </div>
  );
}

export default Authentication;
