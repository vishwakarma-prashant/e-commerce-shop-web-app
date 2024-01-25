import React, { useEffect } from "react";
import { getImage } from "../../appwrite/productConfig";
import { Link } from "react-router-dom";
import CartButtons from "../CartButtons";

function ProductCard({
  $id,
  products_name = "laoding",
  products_description = "loading",
  products_category = "loading",
  products_price = "loading",
  products_image = "loading",
  products_size = "loading",
  products_quantity = "loading",
  products_id = "loading",
}) {
  let obj = {
    $id: $id,
    products_name: products_name,
    products_description: products_description,
    products_category: products_category,
    products_price: products_price,
    products_image: `https://cloud.appwrite.io/v1/storage/buckets/65b0ef13c24a959aa6db/files/${products_image}/view?project=65ae5db721b4d9e04d0c`,
    products_size: products_size,
    products_quantity: products_quantity,
    products_id: products_id,
  };

  return (
    <div className="flex flex-col">
      <Link to={`/product/${$id}`}>
        <div
          className="shadow-2xl shadow-black p-2 m-auto lg:w-96 w-11/12 bg-gray-300 h-96 relative  bg-no-repeat  my-3 rounded-2xl flex flex-col gap-2 items-center  hover:scale-105 duration-300 cursor-pointer hover:shadow-slate-950 "
          style={{
            backgroundImage: `url(https://cloud.appwrite.io/v1/storage/buckets/65b0ef13c24a959aa6db/files/${products_image}/view?project=65ae5db721b4d9e04d0c)`,
            backgroundSize: "100%",objectFit:"contain"
          }}
        >
          <div
            className="absolute bg-transparent border-red-100 rounded-2xl top-48 text-center h-max w-4/5  shadow-xl border-2   hover:scale-105 duration-300 cursor-pointer "
            style={{ backgroundColor: "rgb(255,255,255,0.5)" }}
          >
            <h1 className="text-3xl capitalize">{products_name}</h1>
            <div className="flex justify-center items-center">
              {""}
              <p className="text-sm mx-1">size : {products_size}</p>
            </div>
            <h2 className="text-xl text-black">Rs {products_price}</h2>
          </div>
        </div>
      </Link>
      <CartButtons obj={obj} />
    </div>
  );
}

export default ProductCard;
