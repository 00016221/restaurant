const express = require("express");
const order_router = require("./order");
const resource_router = require('./resource')
const auth_router = require('./auth')

const router = express.Router();

// registering child routers
router.use("/order", order_router);
router.use('/auth', auth_router)
router.use('/resource', resource_router)


module.exports = router;
