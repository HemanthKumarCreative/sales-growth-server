const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({
  img: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  icon: { type: String, required: true },
  category: { type: String, required: true },
  views: { type: String, required: true },
  time: { type: String, required: true },
  revenue: { type: String, required: true },
  sales: { type: String, required: true },
  salesUp: { type: Boolean, required: true },
});

module.exports = mongoose.model("Sales", salesSchema);
