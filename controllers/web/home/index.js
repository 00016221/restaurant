const order_service = require("../../../services/order");

const home_controller = {
  index: async (req, res) => {
    res.render("home");
  },
  waiter: async (req, res) => {
    res.render("home/waiter");
  },
  update: async (req, res) => {
    const orderData = await order_service.getById(req.params.id);
    res.render("home/add_update", { mode: "Update", orderData: orderData });
  },
};

module.exports = home_controller;
