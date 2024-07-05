import "../Styles/Register.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import RegisterBanner from "../Components/Assets/register-banner.png";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState(null);

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];
  return (
    <div className="registerContainer">
      <img src={RegisterBanner} alt="" className="registerBanner" />
      <div className="formRegister">
        <h1 className="formHeading">Sign up to Shri Nath Ji Jewellers</h1>
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
          <p className="loginLink">
            Already have an account?{" "}
            <Link to="/register" className="highlightLink">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
