import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/CartReducer";

function CartButtons(obj) {
  const dispatch = useDispatch();

  return (
    <div className=" w-[80%] m-auto flex justify-between items-center">
      <button
        className="mx-5 px-2 py-2 bg-gray-700 text-white rounded-2xl"
        onClick={() => {
          dispatch(addToCart({ product: obj }));
        }}
      >
        Add to cart
      </button>
      <button
        className="mx-5 px-2 py-2 bg-gray-700 text-white rounded-2xl"
        onClick={() => {
          dispatch(removeFromCart({ product: obj }));
        }}
      >
        Remove from cart
      </button>
    </div>
  );
}

export default CartButtons;
