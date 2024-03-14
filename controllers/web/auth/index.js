const auth_controller = {
  login: async (req, res) => {
    res.render("auth/login");
  },
  register: async (req, res) => {
    res.render("auth/registration");
  },
};

module.exports = auth_controller;
