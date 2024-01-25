import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../../features/productsReducer";
import Auth from "../Auth";
import Header from "../Header";
import Footer from "../Footer";
import Filters from "../Filters";
import Products from "../Products/Products";
import SearchBox from "../SearchBox";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../../features/userReducer";
import { getUser } from "../../appwrite/userConfig";
import { getProducts } from "../../appwrite/productConfig";
import AddProduct from "../AddProduct";
function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useSelector((state) => state.user);
  const checkingUser = async () => {
    const data = await getUser();
    // console.log(data);
    if (data) {
      if (userId !== data.$id)
        dispatch(
          getUserData({ name: data.name, userId: data.$id, isLogin: true })
        );
    } else {
      dispatch(getUserData({ name: "", userid: "", isLogin: false }));
    }
  };
  useEffect(() => {
    checkingUser();
  });

  async function loadAllProduct() {
    try {
      const promise = await getProducts();
      dispatch(loadProducts({ products: promise.documents }));
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    loadAllProduct();
    // console.log("from redux", products);
  }, []);
  // console.log("inital", products);

  return (
    <>
      <Auth>
        <Header />
        <div className="">
          <Filters />
        </div>
        <div className="w-full h-screen overflow-hidden overflow-y-scroll ">
          <div className="lg:ml-52 lg:w-[calc(full -208px)] h-screen ">
            {/* <SearchBox /> */}
            <Products />
          </div>
          {/* <Footer /> */}
        </div>
      </Auth>
    </>
  );
}
export default Home;
