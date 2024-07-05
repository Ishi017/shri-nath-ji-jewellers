import { useState } from "react";
import "../../Styles/Login.css";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import loginBanner from "../../Components/Assets/LoginPageBanner.png";
import { IconContext } from "react-icons";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const LoginPopup = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="popup-login">
          <div className="heading-container">
            <h2>Login</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type="text"
                value={email}
                placeholder="Email"
                className="input-field"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <input
                type={isRevealPwd ? "text" : "password"}
                value={password}
                className="input-field"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <IconContext.Provider value={{ className: "revealPwd" }}>
                <span onClick={() => setIsRevealPwd(!isRevealPwd)}>
                  {isRevealPwd ? <FaRegEye /> : <FaRegEyeSlash />}
                </span>
              </IconContext.Provider>
            </div>
            <div className="button-container">
              <button type="submit" className="submit-button">
                Login
              </button>
              <p className="signup-link">
                Don&apos;t have an account?{" "}
                <Link
                  to="/register"
                  className="highlight-link"
                  onClick={onClose}
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
        <img src={loginBanner} className="login-banner" alt="" />
        <IoClose className="close-icon" onClick={onClose} />
      </div>
    </div>
  );
};

export default LoginPopup;
