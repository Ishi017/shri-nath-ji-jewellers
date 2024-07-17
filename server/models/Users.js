const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String },
  phone: { type: Number, required: true, min: 1000000000, max: 9999999999 },
  gender: { type: String },
  email: { type: String },
  password: { type: String, required: true },
});

const UserModel = mongoose.model("UsersCollection", UserSchema);

module.exports = UserModel;
