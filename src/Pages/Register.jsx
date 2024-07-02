import "../Styles/Register.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
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
      <h1>Sign up to Shri Nath Ji Jewellers</h1>
      <div className="nameGenderContainer">
        <input
          type="text"
          value={name}
          placeholder="Name"
          className="inputField"
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
        <p className="signupLink">
          Already have an account?{" "}
          <Link to="/register" className="highlightLink">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
