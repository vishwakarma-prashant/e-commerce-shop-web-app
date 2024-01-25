import React from "react";
import { useSelector } from "react-redux";
import LogoutButton from "../LogoutButton";
import { Link } from "react-router-dom";
import CartButtons from "../CartButtons";

function Cart() {
  const { cart } = useSelector((state) => state.cart);
//   console.log(cart);

  let demo = {};

//   console.log(Object.keys(demo));
  cart.map((item) => {
    if (demo[item.$id]) {
      demo[item.$id] = demo[item.$id] + 1;
    } else {
      demo[item.$id] = 1;
    }
  });

//   console.log(demo);
  const newCart = [];
  for (const key in demo) {
    let ring = false;
    cart.map((item) => {
      if (key == item.$id && ring == false) {
        newCart.push({ ...item, count: demo[key] });
        ring = true;
      }
    });
  }

//   console.log("new Cart", newCart);
  return (
    <div>
      <div className="font-bold text-white w-full m-auto ">
        <ul className="grid grid-cols-2 lg:flex lg:w-[80%] lg:m-auto justify-evenly ">
          <li className="bg-transparent border-2 w-max px-1 justify-self-center bg-zinc-600  hover:bg-green-600 rounded-lg my-1">
            <Link to={"/home"}>Home</Link>
          </li>

          <li className="bg-black text-white border-2 w-max px-1  rounded-lg my-1 justify-self-center hover:bg-green-600 ">
            <LogoutButton />
          </li>
        </ul>
      </div>

      {newCart.map((prod) => {
        return (
          <>
            <div
              className="  m-2 m-auto lg:w-[50%] my-6 rounded-xl flex justify-center items-center gap-6 border-2 border-red-300  lg:flex-row flex-col    "
              key={prod.products_id}
            >
              <img
                src={prod.products_image}
                className="size-56 lg:size-48 rounded-full lg:rounded-3xl"
              />
              <div>
                <h1>{prod.products_name}</h1>
                <h2>
                  Total cost: Rs {Number(prod.products_price) * prod.count}
                </h2>
                <h2>Quantity {prod.count}</h2>
                <CartButtons obj={prod} />
              </div>
            </div>

            <div className="bg-gray-600 w-full p-3 text-center">
              <p className="text-white ">
                Total Rs {" "}
                {cart.reduce((acc, val) => {
                  return acc + val.products_price;
                }, 0)}
              </p>
              <button onClick={()=>{
                        alert("Thank you for shoppping")
              }} className=" bg-green-600 text-white rounded-lg p-3">
                Checkout and Pay
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Cart;
