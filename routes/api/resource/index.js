const express = require("express");

const { authenticate_token } = require("../../../services/auth/");

const resource_controller = require("../../../controllers/api/resource");

const router = express.Router();

router.post("/protected-resource", (req, res) => {
  try {
    authenticate_token(req);
  } catch (error) {
    return res.status(500).send(error.message);
  }

  resource_controller.protected_resource(req, res);
});

module.exports = router;
