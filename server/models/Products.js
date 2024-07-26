const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    oldPrice: { type: Number, required: true },
    newPrice: { type: Number, required: true },
    category: { type: String },
    item:{type:String},
    image: { type: String },
    material: { type: String },
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model("ProductsCollection", ProductSchema);

module.exports = ProductModel;
