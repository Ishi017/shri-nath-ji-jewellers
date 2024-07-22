const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  oldPrice: { type: Number, required: true },
  newPrice: { type: Number, required: true },
  category: { type: String, required: true },
  images: [{ type: String, required: true }],
  material: { type: String },
  weight: { type: Number },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const ProductModel = mongoose.model("ProductsCollection", ProductSchema);

module.exports = ProductModel;
