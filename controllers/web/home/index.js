const order_service = require("../../../services/order");

const home_controller = {
  index: async (req, res) => {
    res.render("home");
  },
  add: async (req, res) => {
    res.render("chief/chief", { mode: "Add" });
  },
  login: async (req, res) => {
    res.render("authentication/login");
  },
  registration: async (req, res) => {
    res.render("authentication/registration");
  },
  update: async (req, res) => {
    const orderData = await order_service.getById(req.params.id);
    res.render("home/add_update", { mode: "Update", orderData: orderData });
  },
};

module.exports = home_controller;
