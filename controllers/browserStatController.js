const browserStatService = require("../services/browserStatService");

const getBrowserStats = async (req, res) => {
  let response = {};

  try {
    const responseFromService = await browserStatService.getBrowserStats();
    response.status = 200;
    response.message = "BrowserStats Fetched";
    response.body = responseFromService;
  } catch (error) {
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }

  return res.status(response.status).send(response);
};

const getBrowserStat = async (req, res) => {
  let response = {};

  try {
    const responseFromService = await browserStatService.getBrowserStat(
      req.params.id
    );
    response.status = 200;
    response.message = "BrowserStat Fetched";
    response.body = responseFromService;
  } catch (error) {
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }

  return res.status(response.status).send(response);
};

const updateBrowserStat = async (req, res) => {
  let response = {};

  try {
    const responseFromService = await browserStatService.updateBrowserStat({
      browserStatId: req.params.id,
      updatedBrowserStat: req.body,
    });
    response.status = 200;
    response.message = "BrowserStat Updated";
    response.body = responseFromService;
  } catch (error) {
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }

  return res.status(response.status).send(response);
};

const deleteBrowserStat = async (req, res) => {
  let response = {};

  try {
    const responseFromService = await browserStatService.deleteBrowserStat(
      req.params.id
    );
    response.status = 200;
    response.message = "BrowserStat Deleted";
    response.body = responseFromService;
  } catch (error) {
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }

  return res.status(response.status).send(response);
};

const addBrowserStat = async (req, res) => {
  let response = {};

  try {
    const responseFromService = await browserStatService.addBrowserStat(
      req.body
    );
    response.status = 201;
    response.message = "BrowserStats Added";
    response.body = responseFromService;
  } catch (error) {
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }

  return res.status(response.status).send(response);
};

module.exports = {
  getBrowserStats,
  addBrowserStat,
  getBrowserStat,
  updateBrowserStat,
  deleteBrowserStat,
};
