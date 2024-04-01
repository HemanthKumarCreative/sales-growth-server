const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  type: { type: String, required: true },
  amount: { type: String, required: true },
  purpose: { type: String, required: true },
  vendor: { type: String, required: true },
  mode: { type: String, required: true },
});

module.exports = mongoose.model("Transaction", transactionSchema);
