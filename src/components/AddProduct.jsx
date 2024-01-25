import React, { useId, useRef, useState } from "react";
import { createProduct, uploadImage } from "../appwrite/productConfig";
import { ID } from "appwrite";
import { v4 as uuidv4 } from "uuid";
function AddProduct() {
  console.log(uuidv4());
  const [products_image, setProducts_image] = useState(null);

  const [products_name, setProducts_name] = useState("");
  const [products_description, setProducts_description] = useState("");

  const [products_category, setProducts_category] = useState("");
  const [products_price, setProducts_price] = useState("");
  const [products_size, setProducts_size] = useState("");
  const [products_quantity, setProducts_quantity] = useState("");
  const [products_id, setProducts_id] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const product = {
    products_name: products_name,
    products_description: products_description,
    products_category: products_category,
    products_price: products_price,
    products_image: products_image,
    products_size: products_size,
    products_quantity: products_quantity,
    products_id: products_id,
  };

  const handelSubmit = async () => {
    setLoader(true);
    setError(false);
    setErrorMsg("");
    console.log(products_image);
    try {
      const { $id } = await uploadImage(products_image);

      const promise = await createProduct({
        products_name: products_name,
        products_description: products_description,
        products_category: products_category,
        products_price: products_price,
        products_image: $id,
        products_size: products_size,
        products_quantity: products_quantity,
        products_id: uuidv4(),
      });

      console.log(products_id);
      console.log(promise);
    } catch (error) {
      setLoader(false);
      setError(true);
      setErrorMsg(error);
      console.log(error);
    }
    setLoader(false);
    setProducts_name("");
    setProducts_category("");
    setProducts_description("");
    setProducts_image(null);
    setProducts_price(0);
    setProducts_size("");
    setProducts_id("");
    setProducts_quantity("");
  };

  return (
    <div className="w-10/12 m-auto p-5 border-2 border-red-700 shadow-2xl">
      {loader ? "Loading" : null}
      {error ? <p>{errorMsg.toString()}</p> : null}
      <form>
        <label htmlFor="products_name"> Product Name</label>
        <input
          id="products_name"
          className="w-full text-black m-2 outline-none"
          placeholder="Enter Product name"
          value={products_name}
          onChange={(e) => {
            setErrorMsg("");
            setProducts_name(e.currentTarget.value);
          }}
        />
        <label htmlFor="products_description"> Product Description</label>
        <textarea
          id="products_description"
          className="w-full text-black m-2 outline-none"
          placeholder="Enter Product name"
          value={products_description}
          onChange={(e) => {
            setErrorMsg("");

            setProducts_description(e.currentTarget.value);
          }}
        ></textarea>
        <label htmlFor="products_price">Price</label>
        <input
          type="number"
          id="products_price"
          className="w-full m-2 text-black outline-none"
          value={products_price}
          onChange={(e) => setProducts_price(e.currentTarget.value)}
        />
        <label htmlFor="products_quantity">Quantity</label>
        <input
          type="number"
          id="products_quantity"
          className="w-full m-2 text-black outline-none"
          value={products_quantity}
          onChange={(e) => setProducts_quantity(e.currentTarget.value)}
        />
        <div className="w-full mx-10 flex justify-evenly items-center">
          <label>
            Category
            <select
              className="bg-white text-black font-semibold capitalize w-full px-3"
              onChange={(e) => setProducts_category(e.currentTarget.value)}
              value={products_category}
            >
              <option value={"all"}>all </option>
          
              <option value={"shirt"}>shirt </option>
              <option value={"trouser"}>trouser </option>
            </select>
          </label>
          <label>
            Size
            <select
              className="bg-white text-black font-semibold capitalize w-full px-3"
              onChange={(e) => {
                setErrorMsg("");

                setProducts_size(e.currentTarget.value);
              }}
              value={products_size}
            >
              <option value={"xs"}>XS </option>
              <option value={"s"}> S</option>
              <option value={"m"}> M</option>
              <option value={"l"}>L </option>
              <option value={"xl"}>XS </option>
              <option value={"xxl"}> XXl</option>
            </select>
          </label>
        </div>{" "}
        <input
          type="file"
          id="image"
          name="image"
          onChange={(e) => {
            setProducts_image(e.target.files[0]);
            // console.log(e.target.files[0]);
            // console.log(image);
          }}
        />
        <button
          type="submit"
          className="bg-orange-600 px-3 py-2 rounded-xl m-4"
          onClick={(e) => {
            e.preventDefault();
            // console.log("eee");
            handelSubmit();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
