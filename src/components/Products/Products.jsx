import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../appwrite/productConfig";
import { loadProducts } from "../../features/productsReducer";
import { ID } from "appwrite";
import { v4 as uuidv4 } from "uuid";
function Products() {
  const { products } = useSelector((state) => state.products);

  return (
    <>
      {products.length == 0 ? (
        <p className=" text-4xl text-red-700 font-bold w-full text-center m-auto">No Products</p>
      ) : null}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 grid-cols-1 ">
        {products.map((prd) => {
          return <ProductCard {...prd} key={uuidv4()} />;
        })}
      </div>
    </>
  );
}

export default Products;
