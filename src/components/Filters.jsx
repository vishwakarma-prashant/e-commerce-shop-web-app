import React, { useState } from "react";
import Header from "./Header";
import SideHeader from "./SideHeader";
import { useDispatch } from "react-redux";
import { filterProducts, loadProducts } from "../features/productsReducer";
import { getProducts } from "../appwrite/productConfig";

function Filters() {
  const [open, setOpen] = useState(false);
  const [rangeValue, setRangeValue] = useState(0);
  const [sizeValue, setSizeValue] = useState("all");
  const [categoryValue, setCategoryValue] = useState("all");
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const handelSize = (e) => {
    setSizeValue(e.currentTarget.value);
  };
  const handelCategory = (e) => {
    setCategoryValue(e.currentTarget.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    // console.log(rangeValue, sizeValue, categoryValue);
    dispatch(
      filterProducts({
        range: rangeValue,
        size: sizeValue,
        category: categoryValue,
      })
    );
    // setCategoryValue(e.currentTarget.value);
  };
  async function loadAllProduct() {
    try {
      const promise = await getProducts();
      dispatch(loadProducts({ products: promise.documents }));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="fixed z-50 w-full lg:relative">
      <div className="w-full flex justify-between  ">
        <button
          className="bg-slate-950 p-1 m-2 lg:hidden  rounded-xl text-white text-xl font-bold"
          onClick={() => {
            if (!menuOpen) setOpen(true);
          }}
        >
          <p>Filter {">"} </p>
        </button>
        <button
          className="bg-teal-800 p-1 m-2 lg:hidden  rounded-xl text-white text-xl font-bold"
          onClick={() => {
            if (!open) setMenuOpen(!menuOpen);
            console.log(menuOpen);
          }}
        >
          <p> {"<"} Menu </p>
        </button>
      </div>

      <div className="lg:hidden">
        <div
          className={`h-screen bg-teal-900 w-52 z-50 absolute right-0 top-0 rounded-xl duration-1000
          ${menuOpen ? " translate-x-[0px]" : " translate-x-[350px] "}
          `}
        >
          <button
            className={` p-2 border-2 flex justify-center items-center p-2 w-5 h-5 rounded-full text-white font-bold lg:hidden absolute left-0 m-2  `}
            onClick={() => setMenuOpen(false)}
          >
            X
          </button>
          <h1 className="m-3 text-right ">Shop App</h1>

          <SideHeader />
        </div>
      </div>

      <div
        className={`bg-slate-900 text-white h-screen w-52 absolute top-0 rounded-xl z-50  duration-1000 ${
          !open ? " translate-x-[-240px]  lg:translate-x-0 " : " block  "
        }`}
      >
        {!open ? null : (
          <button
            className={` p-2 border-2 flex justify-center items-center p-2 w-5 h-5 rounded-full text-white font-bold lg:hidden absolute right-0 m-2  `}
            onClick={() => setOpen(false)}
          >
            X
          </button>
        )}
        <form className=" " onSubmit={handelSubmit}>
          <h1 className="m-3">Shop App</h1>
          <div className="flex flex-col w-[90%] m-3 ">
            <label htmlFor="priceFilter">
              Min Price <span className="text-blue-600"> </span> {rangeValue}
            </label>
            <input
              type="number"
              id="priceFilter"
              className="w-full m-2 text-black outline-none"
              value={rangeValue}
              onChange={(e) => setRangeValue(e.currentTarget.value)}
            />
            <label htmlFor="size">
              Size <span className="text-blue-600"> {sizeValue} </span>
            </label>
            <div className=" grid grid-cols-3">
              <label className="flex">
                <input
                  type="radio"
                  value={"all"}
                  name="sizeFilter"
                  className="p-2 m-2"
                  onChange={handelSize}
                />
                All
              </label>
              <label className="flex">
                <input
                  type="radio"
                  value={"xs"}
                  name="sizeFilter"
                  className="p-2 m-2"
                  onChange={handelSize}
                />
                xs
              </label>
              <label className="flex">
                <input
                  type="radio"
                  value={"s"}
                  name="sizeFilter"
                  className="p-2 m-2"
                  onChange={handelSize}
                />
                s
              </label>
              <label className="flex">
                <input
                  type="radio"
                  value={"m"}
                  name="sizeFilter"
                  className="p-2 m-2"
                  onChange={handelSize}
                />
                m
              </label>
              <label className="flex">
                <input
                  type="radio"
                  value={"l"}
                  name="sizeFilter"
                  className="p-2 m-2"
                  onChange={handelSize}
                />
                l
              </label>
              <label className="flex">
                <input
                  type="radio"
                  value={"xl"}
                  name="sizeFilter"
                  className="p-2 m-2"
                  onChange={handelSize}
                />
                xl
              </label>
              <label className="flex">
                <input
                  type="radio"
                  value={"xxl"}
                  name="sizeFilter"
                  className="p-2 m-2"
                  onChange={handelSize}
                />
                xxl
              </label>
            </div>

            <div className="w-full">
              Category
              <select
                className="bg-white text-black font-semibold capitalize w-full px-3"
                onChange={handelCategory}
                value={categoryValue}
              >
                <option value={"all"}>All </option>
                <option value={"shirt"}>shirt </option>
                <option value={"trouser"}>trouser </option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="bg-orange-600 px-3 my-3  w-[90%] mx-3"
          >
            Show
          </button>
          <button
            type="button"
            className="bg-green-900 px-3 w-[90%] mx-3"
            onClick={(e) => {
              e.preventDefault();
              loadAllProduct();
              setCategoryValue("all");
              setSizeValue("all");
              setRangeValue(0);
            }}
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}

export default Filters;
