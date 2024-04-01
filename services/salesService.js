const Sales = require("../models/salesModel");

const addSales = async (newSales) => {
  try {
    const sales = new Sales({ ...newSales });
    const result = await sales.save();
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const getSaless = async () => {
  try {
    const saless = await Sales.find();
    return saless;
  } catch (error) {
    throw new Error(error);
  }
};

const getSales = async (salesId) => {
  try {
    const sales = await Sales.findById(salesId);
    return sales;
  } catch (error) {
    throw new Error(error);
  }
};

const updateSales = async ({ salesId, updatedSales }) => {
  const filter = { _id: salesId };

  try {
    await Sales.findOneAndUpdate(filter, updatedSales);
    return [];
  } catch (error) {
    throw new Error(error);
  }
};

const deleteSales = async (salesId) => {
  try {
    await Sales.deleteOne({ _id: salesId });
    return [];
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  addSales,
  getSaless,
  getSales,
  updateSales,
  deleteSales,
};
