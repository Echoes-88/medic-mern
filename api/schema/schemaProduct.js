const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: String,
    description: String,
    quantity: Number,
    published: Boolean
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("Product", productSchema);