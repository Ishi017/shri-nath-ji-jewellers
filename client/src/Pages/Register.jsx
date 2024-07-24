import "../Styles/Register.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import axios from "axios";
import RegisterBanner from "../Components/Assets/register-banner.png";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState(null);

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/register`, {
        name,
        phone,
        gender: gender.value,
        email,
        password,
      });
      navigate("/");
      toast.success("Registration Successful");
    } catch (error) {
      console.error("There was an error registering the user!", error);
      // Handle error (e.g., show error message)
    }
  };
  
  return (
    <div className="registerContainer">
      <img src={RegisterBanner} alt="" className="registerBanner" />
      <div className="formRegister">
        <h1 className="formHeading">Sign up to Shri Nath Ji Jewellers</h1>
        <form onSubmit={handleSubmit}>
          <div className="nameGenderContainer">
            <input
              type="text"
              value={name}
              placeholder="Name"
              className="inputField name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Select
              options={genderOptions}
              value={gender}
              onChange={(selectedOption) => setGender(selectedOption)}
              placeholder="Select Gender"
              className="selectField"
            />{" "}
          </div>
          <div>
            <input
              type="text"
              value={phone}
              placeholder="Phone"
              className="inputField email"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="email"
              value={email}
              placeholder="Email"
              className="inputField email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              placeholder="Password"
              className="inputField email"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="buttonContainer">
            <button type="submit" className="submitButton">
              Sign up
            </button>
          </div>
          <div className="separator">
            <span>Or</span>
          </div>
            <button type="submit" className="oAuth">
              <FcGoogle className="googleIcon" />
              Continue with Google
            </button>
          <p className="loginLink">
            Already have an account?{" "}
            <Link to="/" className="highlightLink">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
