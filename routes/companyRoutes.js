const express = require("express");
const companyRoutes = express();
const {
  getCompanys,
  addCompany,
  getCompany,
  updateCompany,
  deleteCompany,
} = require("../controllers/companyController");

companyRoutes.get("/getCompanys", getCompanys);
companyRoutes.post("/addCompany", addCompany);
companyRoutes.get("/getCompany/:id", getCompany);
companyRoutes.put("/updateCompany/:id", updateCompany);
companyRoutes.delete("/deleteCompany/:id", deleteCompany);

module.exports = { companyRoutes };
