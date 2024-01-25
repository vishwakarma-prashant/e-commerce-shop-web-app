import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/pages/Home";
import Main from "./components/pages/Main";
import AddProduct from "./components/AddProduct";
import SingleProduct from "./components/pages/SingleProduct";
import Cart from "./components/pages/Cart";
import AboutUs from "./components/pages/AboutUs"
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/add-product",
          element: <AddProduct />,
        },
        {
          path: "/product/:id",
          element: <SingleProduct />,
        },        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/About",
          element: <AboutUs />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
