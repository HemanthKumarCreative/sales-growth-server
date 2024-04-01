const Transaction = require("../models/transactionModel");

const addTransaction = async (newTransaction) => {
  try {
    const transaction = new Transaction({ ...newTransaction });
    const result = await transaction.save();
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const getTransactions = async () => {
  try {
    const transactions = await Transaction.find();
    return transactions;
  } catch (error) {
    throw new Error(error);
  }
};

const getTransaction = async (transactionId) => {
  try {
    const transaction = await Transaction.findById(transactionId);
    return transaction;
  } catch (error) {
    throw new Error(error);
  }
};

const updateTransaction = async ({ transactionId, updatedTransaction }) => {
  const filter = { _id: transactionId };

  try {
    await Transaction.findOneAndUpdate(filter, updatedTransaction);
    return [];
  } catch (error) {
    throw new Error(error);
  }
};

const deleteTransaction = async (transactionId) => {
  try {
    await Transaction.deleteOne({ _id: transactionId });
    return [];
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  addTransaction,
  getTransactions,
  getTransaction,
  updateTransaction,
  deleteTransaction,
};
