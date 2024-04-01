const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const { transactionRoutes } = require("./routes/transactionRoutes");
const { browserStatRoutes } = require("./routes/browserStatRoutes");
const { salesRoutes } = require("./routes/salesRoutes");
const { companyRoutes } = require("./routes/companyRoutes");
const app = express();
const PORT = process.env.PORT || 5000;
const M_URI = process.env.M_URI;
app.use(bodyParser.json());
app.use(cors("*"));
app.use("/api", transactionRoutes);
app.use("/api", browserStatRoutes);
app.use("/api", salesRoutes);
app.use("/api", companyRoutes);
mongoose.connect(M_URI);
mongoose.connection.on("error", (error) => {
  console.error(error);
});
mongoose.connection.once("open", () => {
  console.log("Database connected");
});

app.listen(PORT, () => {
  console.log("Server is running");
});
