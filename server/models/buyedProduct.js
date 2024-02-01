const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const buyedProductSchema = new Schema({
  user:{ type: String, required: true},
  name: { type: String, required: true },
  description: { type: String, required: true },
  picUrl: {type:String },
});

module.exports = mongoose.model("BuyedProduct", buyedProductSchema);
