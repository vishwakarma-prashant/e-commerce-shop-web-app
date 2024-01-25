import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
function Login({
  email,
  setEmail,
  password,
  setPassword,
  handelLoginSubmit,
  setError,
}) {
  const { islogin } = useSelector((state) => state.user);
  const text = useRef();
  return (
    <div className="bg-slate-800 flex flex-col text-white p-2 border rounded-xl w-[90%] max-w-72  m-auto">
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={(e) => {
          e.preventDefault();
          handelLoginSubmit();
        }}
      >
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="w-full m-2 text-black outline-none"
          placeholder="Enter Email here"
          value={email}
          onChange={(e) => {
            setError(false);
            setEmail(e.currentTarget.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          className="w-full m-2 outline-none text-black"
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setError(false);
            setPassword(e.currentTarget.value);
          }}
        />
        <button
          type="submit"
          className="bg-cyan-600 hover:bg-blue-400 font-bold rounded-lg px-3 py-1 duration-200"
        >
          {" "}
          Login
        </button>
      </form>
      <div className=" mt-5  text-white font-bold text-center">
        Demo user
        <p className="flex m-2 justify-evenly gap-3 items-center" ref={text}>
         email: test@123.com
         password: 12345678
          <button
            onClick={() => {
              setEmail("test@123.com");
              setPassword("12345678")
            }}
            className="bg-green-900 rounded-full p-2 flex justify-center items-center"
          >
            copy
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
