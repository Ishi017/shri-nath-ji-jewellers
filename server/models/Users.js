const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  googleId: { type: String },
  name: { type: String },
  phone: { type: Number, min: 1000000000, max: 9999999999 },
  gender: { type: String },
  email: { type: String },
  password: { type: String,},
  image:{ type: String }
}, {
  timestamps: true 
});

const UserModel = mongoose.model("UsersCollection", UserSchema);

module.exports = UserModel;
