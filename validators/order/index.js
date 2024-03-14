const { body, param } = require("express-validator");
const food_service = require("../../services/order");

const addOrderValidation = () => {
  return [
    body("foodName").notEmpty().withMessage("Food name must not be empty"),

    body("tableId").notEmpty().withMessage("Table number must not be empty"),
  ];
};

const deleteOrderValidation = () => {
  return [
    param("id").custom(async (id) => {
      const exists = await food_service.getById(id);
      if (!exists) {
        throw new Error("Order not found");
      }
    }),
  ];
};

const updateOrderValidation = () => {
  return [
    param("id").custom(async (id) => {
      const exists = await food_service.getById(id);
      if (!exists) {
        throw new Error("Order not found");
      }
    }),
    body("foodName").notEmpty().withMessage("Food name must not be empty"),

    body("tableId").notEmpty().withMessage("Table number must not be empty"),
  ];
};

module.exports = {
  addOrderValidation,
  updateOrderValidation,
  deleteOrderValidation,
};
