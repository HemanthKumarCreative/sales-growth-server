const Company = require("../models/companyModel");

const addCompany = async (newCompany) => {
  try {
    const company = new Company({ ...newCompany });
    const result = await company.save();
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const getCompanys = async () => {
  try {
    const companys = await Company.find();
    return companys;
  } catch (error) {
    throw new Error(error);
  }
};

const getCompany = async (companyId) => {
  try {
    const company = await Company.findById(companyId);
    return company;
  } catch (error) {
    throw new Error(error);
  }
};

const updateCompany = async ({ companyId, updatedCompany }) => {
  const filter = { _id: companyId };

  try {
    await Company.findOneAndUpdate(filter, updatedCompany);
    return [];
  } catch (error) {
    throw new Error(error);
  }
};

const deleteCompany = async (companyId) => {
  try {
    await Company.deleteOne({ _id: companyId });
    return [];
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  addCompany,
  getCompanys,
  getCompany,
  updateCompany,
  deleteCompany,
};
