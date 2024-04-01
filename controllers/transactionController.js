const transactionService = require("../services/transactionService");

const getTransactions = async (req, res) => {
  let response = {};

  try {
    const responseFromService = await transactionService.getTransactions();
    response.status = 200;
    response.message = "Transactions Fetched";
    response.body = responseFromService;
  } catch (error) {
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }

  return res.status(response.status).send(response);
};

const getTransaction = async (req, res) => {
  let response = {};

  try {
    const responseFromService = await transactionService.getTransaction(
      req.params.id
    );
    response.status = 200;
    response.message = "Transaction Fetched";
    response.body = responseFromService;
  } catch (error) {
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }

  return res.status(response.status).send(response);
};

const updateTransaction = async (req, res) => {
  let response = {};

  try {
    const responseFromService = await transactionService.updateTransaction({
      transactionId: req.params.id,
      updatedTransaction: req.body,
    });
    response.status = 200;
    response.message = "Transaction Updated";
    response.body = responseFromService;
  } catch (error) {
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }

  return res.status(response.status).send(response);
};

const deleteTransaction = async (req, res) => {
  let response = {};

  try {
    const responseFromService = await transactionService.deleteTransaction(
      req.params.id
    );
    response.status = 200;
    response.message = "Transaction Deleted";
    response.body = responseFromService;
  } catch (error) {
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }

  return res.status(response.status).send(response);
};

const addTransaction = async (req, res) => {
  let response = {};

  try {
    const responseFromService = await transactionService.addTransaction(
      req.body
    );
    response.status = 201;
    response.message = "Transactions Added";
    response.body = responseFromService;
  } catch (error) {
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }

  return res.status(response.status).send(response);
};

module.exports = {
  getTransactions,
  addTransaction,
  getTransaction,
  updateTransaction,
  deleteTransaction,
};
