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
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function Navbar({ cart }) {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showItemsDropdown, setShowItemsDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [dropdownTimer, setDropdownTimer] = useState(null);
  const [profileDropdownTimer, setProfileDropdownTimer] = useState(null);
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const isLoggedIn = useSelector((state) => state.userLogin.isLoggedIn);
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);
  console.log(import.meta.env.VITE_APP_BASE_URL);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_BASE_URL}/login/success`,
          {
            withCredentials: true,
          }
        );
        if (!isLoggedIn && response.status === 200)
          toast.success("Login Successful!");
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
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/logout`,
        {},
        { withCredentials: true }
      );
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
          {/* LOGIN_LOGOUT */}
          {!showMobileNavbar ? (
            <GiHamburgerMenu
              className="hamburger"
              onClick={() => setShowMobileNavbar(true)}
            />
          ) : (
            <IoMdClose className="hamburger" id="close" onClick={()=>setShowMobileNavbar(false)}/>
          )}

          {isLoggedIn ? (
            <>
              {/* Show profile dropdown menu if user is logged in */}
              <div
                className="dropdown-user"
                onMouseEnter={() => setShowProfileDropdown(true)}
                onMouseLeave={() => setShowProfileDropdown(false)}
              >
                {/* Display user image if available */}
                {user?.image ? (
                  <img
                    className="login-user-image"
                    src={user.image}
                    alt="User"
                  />
                ) : (
                  // Default avatar icon if no user image
                  <RxAvatar className="avatar-icon" />
                )}

                {showProfileDropdown && (
                  <ul className="dropdown-menu-user">
                    <li>
                      <Link to="/userinfo">Profile</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/userinfo/orders">Orders</Link>
                    </li>
                    <li>
                      <Link to="/userinfo/settings">Settings</Link>
                    </li>
                    {/* Logout option for logged-in users */}
                    <li onClick={handleLogout}>Logout</li>
                  </ul>
                )}
              </div>
            </>
          ) : (
            <>
              {/* Show login button if user is not logged in */}
              <button onClick={handleLoginClick}>Login</button>

              <div
                className="dropdown-user"
                onMouseEnter={() => setShowProfileDropdown(true)}
                onMouseLeave={() => setShowProfileDropdown(false)}
              >
                {/* Default avatar icon for guest users */}
                <RxAvatar className="avatar-icon " />

                {/* Show dropdown menu for guest users if active */}
                {showProfileDropdown && (
                  <ul className="dropdown-menu-user">
                    <li onClick={handleLoginClick}>Login</li>
                    <li>
                      <Link to="/settings">Settings</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                  </ul>
                )}
              </div>
            </>
          )}

          {/* Cart */}
          <Link to="/cart">
            <AiOutlineShoppingCart className="cart-icon" />
          </Link>

          {/* Display number of items in the cart */}
          <div className="cart-count">{cart.length}</div>
        </div>
      </div>

      {showLoginPopup && <LoginPopup onClose={handleClosePopup} />}

      {showMobileNavbar && (
        <div className="mobile-nav">
          <Link>Shop by Category</Link>
          <Link>Men&apos;s Jewellery</Link>
          <Link>Women&apos;s Jewellery</Link>
        </div>
      )}
    </nav>
  );
}
