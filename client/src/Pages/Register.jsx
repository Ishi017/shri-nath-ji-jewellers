import "../Styles/Register.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import axios from "axios";
import RegisterBanner from "../Components/Assets/register-banner.png";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5174/register", {
        name,
        phone,
        gender: gender.value,
        email,
        password,
      });
      console.log(response.data);
      // Handle success (e.g., show success message, redirect to login, etc.)
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
            <p className="loginLink">
              Already have an account?{" "}
              <Link to="/register" className="highlightLink">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
