import "../../Styles/Navbar.css";
import logo from "../Assets/main-logo.png";
import DynamicSection from "./DynamicNews";
import { Link } from "react-router-dom";
import logo2 from "../Assets/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import LoginPopup from "../subcomponents/LoginPopup";

export default function Navbar({cart}) {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownTimer, setDropdownTimer] = useState(null);


  const handleLoginClick = () => {
    setShowLoginPopup(true);
  };

  const handleClosePopup = () => {
    setShowLoginPopup(false);
  };

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimer);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => {
      setShowDropdown(false);
    }, 2000); 
    setDropdownTimer(timer);
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
          <li
              className="dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/shopbycategory/Earrings">Shop by Category</Link>
              {showDropdown && (
                <ul className="dropdown-menu">
                  <li><Link to="/shopbycategory/Ring">Rings</Link></li>
                  <li><Link to="/shopbycategory/Earrings">Earrings</Link></li>
                  <li><Link to="/shopbycategory/Chain">Chains</Link></li>
                  <li><Link to="/shopbycategory/Bracelet">Bracelets</Link></li>
                  <li><Link to="/shopbycategory/PoojaItems">Pooja Items</Link></li>
                  <li><Link to="/shopbycategory/Coins">Coins</Link></li>
                  <li><Link to="/shopbycategory/Payal">Payal</Link></li>
                </ul>
              )}
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
          <div className="cart-count">{cart.length}</div>
        </div>
      </div>
      {showLoginPopup && <LoginPopup onClose={handleClosePopup} />}
    </nav>
  );
}
