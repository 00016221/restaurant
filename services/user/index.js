const fs = require("fs");
const users = require(global.user_db);

const user_service = {
  getUsers: function () {
    return users;
  },
  findUserByName: function (username) {
    return this.getUsers().find((user) => user.username === username);
  },
  addUser: function (user) {
    const users = this.getUsers();
    users.push(user);
    writeToFile(users);
  },
};

const writeToFile = async (users) => {
  await fs.writeFileSync(
    global.user_db,
    JSON.stringify(users, null, 4),
    "utf8"
  );
};

module.exports = user_service;
