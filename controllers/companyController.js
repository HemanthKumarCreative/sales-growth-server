const companyService = require("../services/companyService");

const getCompanys = async (req, res) => {
  let response = {};

  try {
    const responseFromService = await companyService.getCompanys();
    response.status = 200;
    response.message = "Companys Fetched";
    response.body = responseFromService;
  } catch (error) {
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }

  return res.status(response.status).send(response);
};

const getCompany = async (req, res) => {
  let response = {};

  try {
    const responseFromService = await companyService.getCompany(req.params.id);
    response.status = 200;
    response.message = "Company Fetched";
    response.body = responseFromService;
  } catch (error) {
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }

  return res.status(response.status).send(response);
};

const updateCompany = async (req, res) => {
  let response = {};

  try {
    const responseFromService = await companyService.updateCompany({
      companyId: req.params.id,
      updatedCompany: req.body,
    });
    response.status = 200;
    response.message = "Company Updated";
    response.body = responseFromService;
  } catch (error) {
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }

  return res.status(response.status).send(response);
};

const deleteCompany = async (req, res) => {
  let response = {};

  try {
    const responseFromService = await companyService.deleteCompany(
      req.params.id
    );
    response.status = 200;
    response.message = "Company Deleted";
    response.body = responseFromService;
  } catch (error) {
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }

  return res.status(response.status).send(response);
};

const addCompany = async (req, res) => {
  let response = {};

  try {
    const responseFromService = await companyService.addCompany(req.body);
    response.status = 201;
    response.message = "Companys Added";
    response.body = responseFromService;
  } catch (error) {
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }

  return res.status(response.status).send(response);
};

module.exports = {
  getCompanys,
  addCompany,
  getCompany,
  updateCompany,
  deleteCompany,
};
