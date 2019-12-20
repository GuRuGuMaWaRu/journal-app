module.exports = {
  get: async (req, res) => {
    res.status(200).json({ msg: "Get a logged in user" });
  },
  login: async (req, res) => {
    res.status(200).json({ msg: "User is logged in" });
  }
};
