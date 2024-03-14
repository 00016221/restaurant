const fs = require("fs");

// access global order db file
const orders = require(global.order_db);

// write service method implementations
const order_service = {
  getAll() {
    return orders;
  },
  getById(id) {
    return orders.find((f) => f.id == id);
  },
  create(req, res) {
    let new_id = genRandId(5);

    const order = req.body;

    const new_order = {
      id: new_id,
      order: order,
    };

    orders.push(new_order);

    writeToFile(orders);

    return new_order;
  },
  update(id, updateData) {
    const orderIndex = orders.findIndex((o) => o.id == id);

    if (orderIndex === -1) {
      return null;
    }

    orders[orderIndex].order = {
      ...orders[orderIndex].order,
      ...updateData,
    };

    writeToFile(orders);

    return orders[orderIndex];
  },
  delete(id) {
    const index = orders.findIndex((u) => u.id == id);
    orders.splice(index, 1);
    writeToFile(orders);
  },
};

// create function for overwriting the db file updated db content
let writeToFile = async (users) => {
  await fs.writeFileSync(
    global.order_db,
    JSON.stringify(users, null, 4),
    "utf8"
  );
};

// generate random id inspired by uuid
let genRandId = (count) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < count; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

module.exports = order_service;
