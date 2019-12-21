const Note = require("../models/Note");

module.exports = {
  index: async (req, res) => {
    res.status(200).json({ msg: "Get all notes" });
  },
  // @route     POST api/notes
  // @desc      Create a note
  // @access    Private
  create: async (req, res) => {
    try {
      const note = await Note.create(req.body);
      res.status(201).json(note);
    } catch (err) {
      console.error("Error:", err.message);
      res.status(500).json({ error: err.message });
    }
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
