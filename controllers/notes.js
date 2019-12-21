const Note = require("../models/Note");

module.exports = {
  // @route     GET api/notes
  // @desc      Get all notes
  // @access    Private
  index: async (req, res) => {
    try {
      const notes = await Note.find();
      res.status(200).json(notes);
    } catch (err) {
      console.error("Error:", err.message);
      res.status(500).json({ error: err.message });
    }
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
