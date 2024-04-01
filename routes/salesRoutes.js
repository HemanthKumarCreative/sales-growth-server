const express = require("express");
const salesRoutes = express();
const {
  getSaless,
  addSales,
  getSales,
  updateSales,
  deleteSales,
} = require("../controllers/salesController");

salesRoutes.get("/getSales", getSaless);
salesRoutes.post("/addSales", addSales);
salesRoutes.get("/getSales/:id", getSales);
salesRoutes.put("/updateSales/:id", updateSales);
salesRoutes.delete("/deleteSales/:id", deleteSales);

module.exports = { salesRoutes };
