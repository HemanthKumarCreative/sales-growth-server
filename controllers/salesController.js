const salesService = require("../services/salesService");

const getSaless = async (req, res) => {
  let response = {};

  try {
    const responseFromService = await salesService.getSaless();
    response.status = 200;
    response.message = "Saless Fetched";
    response.body = responseFromService;
  } catch (error) {
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }

  return res.status(response.status).send(response);
};

const getSales = async (req, res) => {
  let response = {};

  try {
    const responseFromService = await salesService.getSales(req.params.id);
    response.status = 200;
    response.message = "Sales Fetched";
    response.body = responseFromService;
  } catch (error) {
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }

  return res.status(response.status).send(response);
};

const updateSales = async (req, res) => {
  let response = {};

  try {
    const responseFromService = await salesService.updateSales({
      salesId: req.params.id,
      updatedSales: req.body,
    });
    response.status = 200;
    response.message = "Sales Updated";
    response.body = responseFromService;
  } catch (error) {
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }

  return res.status(response.status).send(response);
};

const deleteSales = async (req, res) => {
  let response = {};

  try {
    const responseFromService = await salesService.deleteSales(req.params.id);
    response.status = 200;
    response.message = "Sales Deleted";
    response.body = responseFromService;
  } catch (error) {
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }

  return res.status(response.status).send(response);
};

const addSales = async (req, res) => {
  let response = {};

  try {
    const responseFromService = await salesService.addSales(req.body);
    response.status = 201;
    response.message = "Saless Added";
    response.body = responseFromService;
  } catch (error) {
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }

  return res.status(response.status).send(response);
};

module.exports = {
  getSaless,
  addSales,
  getSales,
  updateSales,
  deleteSales,
};
