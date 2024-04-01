const express = require("express");
const browserStatRoutes = express();
const {
  getBrowserStats,
  addBrowserStat,
  getBrowserStat,
  updateBrowserStat,
  deleteBrowserStat,
} = require("../controllers/browserStatController");

browserStatRoutes.get("/getBrowserStats", getBrowserStats);
browserStatRoutes.post("/addBrowserStat", addBrowserStat);
browserStatRoutes.get("/getBrowserStat/:id", getBrowserStat);
browserStatRoutes.put("/updateBrowserStat/:id", updateBrowserStat);
browserStatRoutes.delete("/deleteBrowserStat/:id", deleteBrowserStat);

module.exports = { browserStatRoutes };
