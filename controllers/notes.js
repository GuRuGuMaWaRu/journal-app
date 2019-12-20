module.exports = {
  index: async (req, res) => {
    res.status(200).json({ msg: "Get all notes" });
  },
  create: async (req, res) => {
    res.status(201).json({ msg: "Create a note" });
  },
  read: async (req, res) => {
    res.status(200).json({ msg: "Get a note" });
  },
  update: async (req, res) => {
    res.status(200).json({ msg: "Change a note" });
  },
  delete: async (req, res) => {
    res.status(200).json({ msg: "Delete a note" });
  }
};
