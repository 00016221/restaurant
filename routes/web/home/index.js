const express = require("express");
const router = express.Router();
const home_controller = require("../../../controllers/web/home");
const auth_controller = require("../../../controllers/web/auth");

router.get("/", home_controller.index);
router.get("/waiter", home_controller.waiter);
router.get("/update", home_controller.update);
router.get("/update/:id", home_controller.update);

router.get("/login", auth_controller.login);
router.get("/register", auth_controller.register);
module.exports = router;
