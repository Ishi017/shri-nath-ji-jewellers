import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import MensCategory from "./Pages/MensCategory.jsx";
import WomensCategory from "./Pages/WomensCategory.jsx";
import ProductPage from "./Pages/ProductPage.jsx";
import Register from "./Pages/Register.jsx";
import { useState } from "react";
import ShopbyCategory from "./Pages/ShopbyCategory.jsx";
import { Toaster } from "react-hot-toast";
import UserDetails from "./Pages/UserDetails";
import SuccessPopup from "./Components/subcomponents/Success.jsx"
import ShippingDetails from "./Components/AboutUs/Shipping";
import ReturnPolicy from "./Components/AboutUs/ReturnPolicy";
import FAQs from "./Components/AboutUs/FAQs";
// import ItemContainer from "./Components/SingleItem/ItemContainer";
// import ProductRings from "./Components/subcomponents/ProductRings";

function App() {
  const [cart, setCart] = useState([]);
  const location = useLocation();

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      {location.pathname !== "/register" && (
          <div className="Navbar">
            <Navbar cart={cart} />
          </div>
        )}
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/cart"
              element={<Cart cart={cart} setCart={setCart} />}
            />
            <Route path="/mens-category" element={<MensCategory />} />
            <Route path="/womens-category" element={<WomensCategory />} />
            <Route
              path="/product/:id"
              element={<ProductPage cart={cart} setCart={setCart} />}
            />
            <Route
              path="/shopbycategory/:item"
              element={<ShopbyCategory />}
            />
             <Route
              path="/userinfo"
              element={<UserDetails />}
            />
            <Route
            path="/successPayment"
            element={<SuccessPopup/>}
           />   
            <Route
            path="/shipping"
            element={<ShippingDetails/>}
           />    
           <Route
            path="/return-policy"
            element={<ReturnPolicy/>}
           />    
           <Route
            path="/faqs"
            element={<FAQs/>}
           />       
          </Routes>
        </div>
    </>
  );
}

export default App;
