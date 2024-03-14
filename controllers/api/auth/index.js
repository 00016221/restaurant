const user_service = require("../../../services/user/");
const auth_service = require("../../../services/auth/");

const auth_controller = {
  register: async (req, res) => {
    const { username, password } = req.body;

    const user = user_service.findUserByName(username);

    if (user) return res.status(400).send("username already taken");

    const hashedPassword = await auth_service.encrypt(password);

    try {
      user_service.addUser({
        id: Date.now(),
        username: username,
        password: hashedPassword,
      });
    } catch (error) {
      return res.status(500).send("could not save user");
    }

    return res.status(201).send("user registered");
  },
  login: async (req, res) => {
    const { username, password } = req.body;

    const user = user_service.findUserByName(username);

    if (!user) return res.status(400).send("username or password is incorrect");

    const comparedPassword = await auth_service.compare(
      password,
      user.password
    );

    if (!comparedPassword)
      return res.status(400).send("username or password is incorrect");

    const accessToken = await auth_service.access_token(user.username);

    return res.json({ accessToken });
  },
};

module.exports = auth_controller;
