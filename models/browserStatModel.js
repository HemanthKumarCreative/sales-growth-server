const mongoose = require("mongoose");

const browserStatSchema = new mongoose.Schema({
  avatar: { type: String, required: true },
  title: { type: String, required: true },
  value: { type: String, required: true },
});

module.exports = mongoose.model("BrowserStat", browserStatSchema);
