const express = require("express");
const transactionRoutes = express();
const {
  getTransactions,
  addTransaction,
  getTransaction,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

transactionRoutes.get("/getTransactions", getTransactions);
transactionRoutes.post("/addTransaction", addTransaction);
transactionRoutes.get("/getTransaction/:id", getTransaction);
transactionRoutes.put("/updateTransaction/:id", updateTransaction);
transactionRoutes.delete("/deleteTransaction/:id", deleteTransaction);

module.exports = { transactionRoutes };
