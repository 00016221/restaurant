const express = require("express");
const { validationResult } = require("express-validator");
const {
  addOrderValidation,
  updateOrderValidation,
  deleteOrderValidation,
} = require("../../../validators/order");

const router = express.Router();
const order_controller = require("../../../controllers/api/order");

// Define API routes
router.get("/", (req, res) => {
  order_controller.getAll(req, res);
});

router.post("/", addOrderValidation(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  order_controller.create(req, res);
});

router.put("/:id", updateOrderValidation(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  order_controller.update(req, res);
});

router.delete("/:id", deleteOrderValidation(), (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  order_controller.delete(req, res);
});

module.exports = router;
