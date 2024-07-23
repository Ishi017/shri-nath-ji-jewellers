import "./App.css";
// import React from 'react'
import Navbar from "./Components/Navbar/Navbar";
import { createBrowserRouter , BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
// import Login from "./Pages/Login";
import MensCategory from "./Pages/MensCategory.jsx";
import WomensCategory from "./Pages/WomensCategory.jsx";
import ProductPage from "./Pages/ProductPage.jsx";
import Register from "./Pages/Register.jsx";
import { useState } from "react";
import ShopbyCategory from "./Pages/ShopbyCategory.jsx";
import { Toaster } from "react-hot-toast";
// import ItemContainer from "./Components/SingleItem/ItemContainer";
// import ProductRings from "./Components/subcomponents/ProductRings";

function App() {
  const [cart, setCart] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <div className="Navbar">
            <Navbar cart={cart} />
          </div>
          <div className="content-container">
            {" "}
            <Shop />{" "}
          </div>
        </>
      ),
    },
    {
      path: "/register",
      element: (
        <>
          {/* <div className="App-nav">
            <App />
          </div> */}
          <div className="content-container">
            {" "}
            <Register />
          </div>
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <div className="Navbar">
            <Navbar cart={cart} />
          </div>
          <div className="content-container">
            <Cart cart={cart} setCart={setCart} />
          </div>
        </>
      ),
    },
    {
      path: "/mens-category",
      element: (
        <>
          <div className="Navbar">
            <Navbar cart={cart} />
          </div>
          <div className="content-container">
            <MensCategory />
          </div>
        </>
      ),
    },
    {
      path: "/womens-category",
      element: (
        <>
          <div className="Navbar">
            <Navbar cart={cart} />
          </div>
          <div className="content-container">
            <WomensCategory />
          </div>
        </>
      ),
    },
    {
      path: "/product/:id",
      element: (
        <>
          <div className="Navbar">
            <Navbar cart={cart} />
          </div>
          <div className="content-container">
            <ProductPage cart={cart} setCart={setCart} />
          </div>
        </>
      ),
    },
    {
      path: "/shopbycategory/:item",
      element: (
        <>
          <div className="Navbar">
            <Navbar cart={cart} />
          </div>
          <div className="content-container">
            <ShopbyCategory />
          </div>
        </>
      ),
    },
    // {
    //   path:"/products",
    //   element:(
    //   <>
    //   <div className="Navbar">
    //   <Navbar  cart={cart}/>
    //   </div>
    //       <div className="content-container">
    //         <ProductRings/>
    //       </div>
    //     </>
    //   ),

    // }
    // {
    //   path:"/product/:item",
    //   element:(
    //   <>
    //   <div className="Navbar">
    //   <Navbar  cart={cart}/>
    //   </div>
    //       <div className="content-container">
    //         <ItemContainer  category={""} item={item}/>
    //       </div>
    //     </>
    //   ),
    // },
  ]);

  // return (
  //   <>
  //     <Toaster position="bottom-center" reverseOrder={false} />
  //     <RouterProvider router={router}></RouterProvider>
  //   </>
  // );
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <BrowserRouter>
        <div className="Navbar">
          <Navbar cart={cart} />
        </div>
        <div className="content-container">
          <Routes>
            <Route
              path="/"
              element={<Shop />}
            />
            <Route
              path="/register"
              element={<Register />}
            />
            <Route
              path="/cart"
              element={<Cart cart={cart} setCart={setCart} />}
            />
            <Route
              path="/mens-category"
              element={<MensCategory />}
            />
            <Route
              path="/womens-category"
              element={<WomensCategory />}
            />
            <Route
              path="/product/:id"
              element={<ProductPage cart={cart} setCart={setCart} />}
            />
            <Route
              path="/shopbycategory/:item"
              element={<ShopbyCategory />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
