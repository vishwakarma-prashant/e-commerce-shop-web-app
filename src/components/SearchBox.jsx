import React from "react";

function SearchBox() {
  return (
    <div className="p-2 bg-gray-700 w-[70%] lg:w-8/12 m-auto rounded-3xl text-white">
      <form className=" flex  ">
        <input type="text" placeholder="Search here" className="w-[80%] mx-3 outline-none bg-transparent  " />
        <button type="submit" className="w-[20%] bg-transparent font-bold hover:bg-slate-900 rounded-full">search</button>
      </form>
    </div>
  );
}

export default SearchBox;
