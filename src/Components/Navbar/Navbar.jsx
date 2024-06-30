import "../../Styles/Navbar.css";
import logo from "../Assets/main-logo.png";
import DynamicSection from "./DynamicNews";
import { Link } from "react-router-dom";
import logo2 from "../Assets/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import LoginPopup from "../subcomponents/LoginPopup";

export default function Navbar() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const handleLoginClick = () => {
    setShowLoginPopup(true);
  };

  const handleClosePopup = () => {
    setShowLoginPopup(false);
  };
  return (
    <nav className="navbar">
      <div className="navbar-news">
        <DynamicSection />
      </div>
      <div className="navbar-items">
        <div className="mainlogo">
          <Link to="/">
            <img id="main-logo" src={logo} alt="" />
          </Link>
          <img className="title" src={logo2} alt="" />
        </div>

        <div className="navbar-list">
          <ul id="nav-list">
            <li>
              <Link to="/pickcategory/: latest collection">
                Latest Collection
              </Link>
            </li>
            <li>
              <Link to="/menscategory">Men&apos;s Jewellery</Link>
            </li>
            <li>
              <Link to="/womenscategory">Women&apos;s Jewellery</Link>
            </li>
          </ul>
        </div>

        <div className="nav-login-cart">
          <Link to="">
            <button onClick={handleLoginClick}>Login</button>
          </Link>
          <Link to="/cart">
            <AiOutlineShoppingCart className="cart-icon" />
          </Link>
          <div className="cart-count">0</div>
        </div>
      </div>
      {showLoginPopup && <LoginPopup onClose={handleClosePopup} />}
    </nav>
  );
}
