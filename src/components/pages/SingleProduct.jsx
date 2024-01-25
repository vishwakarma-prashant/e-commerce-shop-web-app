import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../../appwrite/productConfig";
import CartButton from "../CartButton";
import CartButtons from "../CartButtons";
import Header from "../Header";
import SideHeader from "../SideHeader";
import LogoutButton from "../LogoutButton";

function SingleProduct() {
  const { id } = useParams();
  console.log(id);
  const [obj, setObj] = useState({});

  const loadSingleProduct = async () => {
    const data = await getProduct(id);
    setObj({ ...data });
    // console.log(obj);
  };
  useEffect(() => {
    loadSingleProduct();
  }, []);

  return (
    <>
      {!obj ? (
        "loading"
      ) : (
        <div className="w-full m-auto">
          <div className="font-bold text-white w-full m-auto ">
            <ul className="grid grid-cols-2 lg:flex lg:w-[80%] lg:m-auto justify-between ">
              <li className="bg-transparent border-2 w-max px-1 justify-self-center bg-zinc-600  hover:bg-green-600 rounded-lg my-1">
                <Link to={"/home"}>Home</Link>
              </li>
              <li className="bg-transparent border-2 w-max px-1 bg-zinc-600 justify-self-center rounded-lg my-1 hover:bg-green-600">
                <Link to={"/About"}>About</Link>
              </li>
              <li className="bg-transparent border-2 w-max px-1 bg-zinc-600 rounded-lg my-1 justify-self-center hover:bg-green-600 ">
                <CartButton />
              </li>
              <li className="bg-black text-white border-2 w-max px-1  rounded-lg my-1 justify-self-center hover:bg-green-600 ">
                <LogoutButton />
              </li>
            </ul>
          </div>
          <div className="w-full h-screen bg-gray-100 lg:flex my-3 p-3 lg:flex-row flex-col justify-evenly mx-1 overflow-y-scroll m-auto ">
            <img
              src={`https://cloud.appwrite.io/v1/storage/buckets/65b0ef13c24a959aa6db/files/${obj.products_image}/view?project=65ae5db721b4d9e04d0c`}
              className="lg:w-[600px] object-contain h-[500px] w-11/12 rounded-3xl object-cover"
              alt="no img"
            />
            <div className=" justify-center flex flex-col gap-4 p-3 m-3">
              <h1 className="text-4xl">{obj.products_name}</h1>
              <h3 className="text-xl text-wrap capitalize">
                {obj.products_description}
              </h3>
              <h3 className="text-xl text-wrap capitalize">
                Category:{` ${obj.products_category}`}
              </h3>
              <h3 className="text-lg text-wrap capitalize">
                Size:{` ${obj.products_size}`}
              </h3>

              <h3 className="text-lg text-wrap">
                Price:{` Rs ${obj.products_price}`}
              </h3>
              <CartButtons obj={obj} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleProduct;
