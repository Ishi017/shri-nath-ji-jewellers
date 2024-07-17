const UserModel = require("../models/Users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports.Login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const foundUser = await UserModel.findOne({ email: email });

    if (!foundUser) {
      return res.status(404).json({
        status: "false",
        message: "Kindly enter correct email.",
      });
    }

    const result = await bcrypt.compare(password, foundUser.password);
    if (!result) {
      return res
        .status(401)
        .json({ status: "forgot", message: "Incorrect password" });
    }

    const token = jwt.sign(
      {
        id: foundUser._id,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: 3 * 24 * 60 * 60, // 3 days
      }
    );
    res.cookie("token", token, {
      maxAge: 1000 * 60 * 60 * 24 * 3,
      withCredentials: true,
      httpOnly: false,
      secure: true,
      sameSite: "none",
    });

    return res.status(200).json({ message:"Logged in successfully" });
  } catch (error) {
    console.error("Error during login", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.Register = async (req, res, next) => {
  const { name, phone, gender, email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (user) {
      return res.status(400).json({
        message: "User with this email already exists",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      name,
      phone,
      gender,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ err });
  }
};
