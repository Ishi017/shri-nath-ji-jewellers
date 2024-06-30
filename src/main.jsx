import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import ShopbyCategory from "./Pages/ShopbyCategory";
import MensCategory from "./Pages/MensCategory.jsx";
import WomensCategory from "./Pages/WomensCategory.jsx";
import Register from "./Pages/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div className="App-nav">
          <App />
        </div>
        <div className="content-container">
          {" "}
          <Shop />{" "}
        </div>
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <div className="App-nav">
          <App />
        </div>
        <div className="content-container">
          {" "}
          <Login />
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
        <div className="App-nav">
          <App />{" "}
        </div>{" "}
        <div className="content-container">
          <Cart />
        </div>
      </>
    ),
  },
  {
    path: "/pickcategory/:category",
    element: (
      <>
        <div className="App-nav">
          <App />{" "}
        </div>{" "}
        <div className="content-container">
          <ShopbyCategory />
        </div>
      </>
    ),
  },
  {
    path: "/menscategory",
    element: (
      <>
        <div className="App-nav">
          <App />{" "}
        </div>{" "}
        <div className="content-container">
          <MensCategory />
        </div>
      </>
    ),
  },
  {
    path: "/womenscategory",
    element: (
      <>
        <div className="App-nav">
          <App />{" "}
        </div>{" "}
        <div className="content-container">
          <WomensCategory />
        </div>
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App/> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
