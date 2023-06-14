const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    expiryDate: { type: Date, required: true },
    manufacturingDate: { type: Date, required: true },
    category: { type: String, required: true },
    url: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
