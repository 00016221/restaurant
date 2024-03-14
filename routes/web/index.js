const express = require("express");
const home_router = require("./home");
const auth_router = require("./auth");
const router = express.Router();

// registering child routers
router.use("/", home_router);
router.use("/", auth_router);

module.exports = router;
