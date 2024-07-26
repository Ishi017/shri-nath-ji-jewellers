const UserModel = require("../models/Users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cloudinary = require("cloudinary").v2;
const Product = require("../models/Products");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

async function handleUpload(file) {
  const res = await cloudinary.uploader.upload(file, {
    folder: "shri-nath-ji-jewellers",
  });
  return res;
}

module.exports.addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      oldPrice,
      newPrice,
      category,
      material,
      weight,
    } = req.body;
    const image = req.file;

    console.log(req);

    if (
      !name ||
      !description ||
      !oldPrice ||
      !newPrice ||
      !category ||
      !image
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

  

    let imageFilePath = null;
    let cldRes = null;
    if (req.file && req.file.path) {
      imageFilePath = req.file.path;
      cldRes = await handleUpload(imageFilePath);
    }

    const newProduct = new Product({
      name,
      description,
      oldPrice,
      newPrice,
      category,
      image: imageFilePath ? cldRes.secure_url : null,
      material,
      weight,
    });

    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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

    return res.status(200).json({ message: "Logged in successfully" });
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
module.exports.Logout = (req, res) => {
  const cookieValue = req.cookies;
  if (cookieValue) {
    res.cookie("token", "", {
      maxAge: 0,
      withCredentials: true,
      httpOnly: false,
      secure: true,
      sameSite: "none",
    });

    res.clearCookie("connect.sid", { path: "/" });

    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  } else {
    res.status(400).send("Cookie not found");
  }
};
