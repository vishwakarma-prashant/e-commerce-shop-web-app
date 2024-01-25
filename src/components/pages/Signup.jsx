import React, { useState } from "react";
import { useSelector } from "react-redux";

function Signup({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  handelSignupSubmit,
  setError,
}) {
  return (
    <div className="bg-slate-800 flex flex-col text-white p-2 border rounded-xl w-[90%] max-w-72  m-auto ">
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={(e) => {
          e.preventDefault();
          setError(false);
          handelSignupSubmit();
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          id="name"
          className="w-full text-black m-2 outline-none"
          placeholder="Enter Email here"
          value={name}
          onChange={(e) => {
            setError(false);
            setName(e.currentTarget.value);
          }}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="w-full text-black m-2 outline-none"
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
          className="w-full  text-black m-2 outline-none"
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setError(false);
            setPassword(e.currentTarget.value);
          }}
        />
        <button
          className="bg-orange-500 hover:bg-blue-400 font-bold rounded-lg px-3 py-1 duration-200"
          type="submit"
        >
          {" "}
          SignUp
        </button>
      </form>
    </div>
  );
}

export default Signup;
