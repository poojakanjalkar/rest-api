const mongoose = require("mongoose");
const mongoosePaginate=require("mongoose-paginate-v2");

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
productSchema.plugin(mongoosePaginate)
module.exports = mongoose.model("Product", productSchema);
