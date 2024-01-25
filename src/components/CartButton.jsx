import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartButton() {
  const { cart } = useSelector((state) => state.cart);
  // console.log(cart)
  return (<Link to={"/cart"}>
    <button className="">
      Cart : {cart.length}
    </button>
  </Link>
  );
}

export default CartButton;
