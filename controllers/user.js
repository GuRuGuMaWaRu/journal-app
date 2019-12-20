module.exports = {
  register: async (req, res) => {
    res.status(201).json({ msg: "Registration successful" });
  }
};
