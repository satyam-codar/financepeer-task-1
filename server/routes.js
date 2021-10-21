const express = require("express");
const router = express.Router();
const controller = require("./controller");
router.post("/postJsonFile", controller.addJsonData);
router.get("/getUserData", controller.getUserData);
module.exports = router;
