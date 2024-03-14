const express = require("express");

const auth_controller = require("../../../controllers/api/auth");

const router = express.Router();

// localhost:4000/api/auth/register
router.post("/register", auth_controller.register);

// localhost:4000/api/auth/login
router.post("/login", auth_controller.login);

module.exports = router;
