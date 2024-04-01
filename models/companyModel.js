const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  ordersBarChart: { type: Object, required: true },
  expenseBarChart: { type: Object, required: true },
  revenueBarChart: { type: Object, required: true },
  earningsChart: { type: Object, required: true },
  statistics: { type: Object, required: true },
});

module.exports = mongoose.model("Company", companySchema);
