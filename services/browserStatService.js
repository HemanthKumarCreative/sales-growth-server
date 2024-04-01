const BrowserStat = require("../models/browserStatModel");

const addBrowserStat = async (newBrowserStat) => {
  try {
    const browserStat = new BrowserStat({ ...newBrowserStat });
    const result = await browserStat.save();
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const getBrowserStats = async () => {
  try {
    const browserStats = await BrowserStat.find();
    return browserStats;
  } catch (error) {
    throw new Error(error);
  }
};

const getBrowserStat = async (browserStatId) => {
  try {
    const browserStat = await BrowserStat.findById(browserStatId);
    return browserStat;
  } catch (error) {
    throw new Error(error);
  }
};

const updateBrowserStat = async ({ browserStatId, updatedBrowserStat }) => {
  const filter = { _id: browserStatId };

  try {
    await BrowserStat.findOneAndUpdate(filter, updatedBrowserStat);
    return [];
  } catch (error) {
    throw new Error(error);
  }
};

const deleteBrowserStat = async (browserStatId) => {
  try {
    await BrowserStat.deleteOne({ _id: browserStatId });
    return [];
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  addBrowserStat,
  getBrowserStats,
  getBrowserStat,
  updateBrowserStat,
  deleteBrowserStat,
};
