// import specific service class
const order_service = require("../../../services/order");

// mention the service's needed actions (methods)
const order_controller = {
  getAll(req, res) {
    res.json(order_service.getAll());
  },
  create(req, res) {
    res.status(201).json(order_service.create(req, res));
  },
  update(req, res) {
    const order = order_service.update(req.params.id, req.body);

    if (order) {
      res.json(order);
    } else {
      res.status(404).send("Order not found");
    }
  },
  delete(req, res) {
    const order = order_service.getById(req.params.id);

    if (order) {
      order_service.delete(req.params.id);
      res.status(204).send("Order deleted successfully");
    } else {
      res.status(404).send("Order not found");
    }
  },
};

module.exports = order_controller;
