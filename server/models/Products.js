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
}, {
  timestamps: true 
});

const ProductModel = mongoose.model("ProductsCollection", ProductSchema);

module.exports = ProductModel;
