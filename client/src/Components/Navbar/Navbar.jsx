/* eslint-disable no-undef */
import "../../Styles/Navbar.css";
import logo from "../Assets/main-logo.png";
import DynamicSection from "./DynamicNews";
import { Link } from "react-router-dom";
import logo2 from "../Assets/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useEffect, useState } from "react";
import LoginPopup from "../subcomponents/LoginPopup";
import { RxAvatar } from "react-icons/rx";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Features/isLoggedInSlice";
import toast from "react-hot-toast";

export default function Navbar({ cart }) {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showItemsDropdown, setShowItemsDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [dropdownTimer, setDropdownTimer] = useState(null);
  const [profileDropdownTimer, setProfileDropdownTimer] = useState(null);
  const isLoggedIn = useSelector((state) => state.userLogin.isLoggedIn);
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);
  console.log(import.meta.env.VITE_APP_BASE_URL)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_BASE_URL}/login/success`,
          {
            withCredentials: true,
          }
        );
        if(!isLoggedIn && response.status === 200) toast.success("Login Successful!")
        dispatch(loginUser(true));

        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);


  const handleLoginClick = () => {
    setShowLoginPopup(true);
  };
  


  const handleLogout = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/logout`,{}, { withCredentials: true });
      if (response.status === 200) {
        dispatch(loginUser(false));
        toast.success("User Logged Out");
        setUser(null);
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleClosePopup = () => {
    setShowLoginPopup(false);
  };

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimer);
    setShowItemsDropdown(true);
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => {
      setShowItemsDropdown(false);
    }, 2000);
    setDropdownTimer(timer);
  };

  const handleProfileMouseEnter = () => {
    clearTimeout(profileDropdownTimer);
    setShowProfileDropdown(true);
  };

  const handleProfileMouseLeave = () => {
    const timer = setTimeout(() => {
      setShowProfileDropdown(false);
    }, 2000);
    setProfileDropdownTimer(timer);
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
              {showItemsDropdown && (
                <ul className="dropdown-menu">
                  <Link to="/shopbycategory/Ring">
                    <li>Rings</li>
                  </Link>
                  <Link to="/shopbycategory/Earrings">
                    <li>Earrings</li>
                  </Link>
                  <Link to="/shopbycategory/Chain">
                    <li>Chains</li>
                  </Link>
                  <Link to="/shopbycategory/Bracelet">
                    <li>Bracelets</li>
                  </Link>
                  <Link to="/shopbycategory/PoojaItems">
                    <li>Pooja Items</li>
                  </Link>
                  <Link to="/shopbycategory/Coins">
                    <li>Coins</li>
                  </Link>
                  <Link to="/shopbycategory/Payal">
                    <li>Payal</li>
                  </Link>
                </ul>
              )}
            </li>
            <li>
              <Link to="/mens-category">Men&apos;s Jewellery</Link>
            </li>
            <li>
              <Link to="/womens-category">Women&apos;s Jewellery</Link>
            </li>
          </ul>
        </div>

        <div className="nav-login-cart">
          {isLoggedIn ? (
            <>
              <button onClick={handleLogout}>Logout</button>
             {user?.image ? <img
                src={user?.image}
                alt=""
                style={{
                  backgroundColor: "#ccc",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "inline-block",
                }}
              />:<RxAvatar
              className="avatar-icon dropdown"
              onMouseEnter={handleProfileMouseEnter}
              onMouseLeave={handleProfileMouseLeave}
            />}
              {showProfileDropdown && (
                <ul className="dropdown-menu">
                  <Link to="/profile">
                    <li>Profile</li>
                  </Link>
                  <Link to="/orders">
                    <li>Orders</li>
                  </Link>
                  <Link to="/settings">
                    <li>Settings</li>
                  </Link>
                  <li onClick={handleLogout}>Logout</li>
                </ul>
              )}
            </>
          ) : (
            <>
              <button onClick={handleLoginClick}>Login</button>
              <RxAvatar
                className="avatar-icon dropdown"
                onMouseEnter={handleProfileMouseEnter}
                onMouseLeave={handleProfileMouseLeave}
              />
            </>
          )}
          {showProfileDropdown && (
            <ul className="dropdown-menu">
              <Link to="/profile">
                <li>Profile</li>
              </Link>
              <Link to="/orders">
                <li>Orders</li>
              </Link>
              <Link to="/settings">
                <li>Settings</li>
              </Link>
              <li onClick={handleLoginClick}>Logout</li>
            </ul>
          )}
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
