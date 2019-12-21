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
  // @route     GET api/notes/:id
  // @desc      Get a note
  // @access    Private
  read: async (req, res) => {
    const id = req.params.id;

    try {
      const note = await Note.findById(id);

      res.status(200).json(note);
    } catch (err) {
      console.error("Error:", err.message);
      res.status(500).json({ error: err.message });
    }
  },
  // @route     PATCH api/notes/:id
  // @desc      Edit a note
  // @access    Private
  update: async (req, res) => {
    const id = req.params.id;

    try {
      await Note.findByIdAndUpdate(id, req.body);

      res.status(200).json({ msg: "Note updated successfully" });
    } catch (err) {
      console.error("Error:", err.message);
      res.status(500).json({ error: err.message });
    }
  },
  // @route     DELETE api/notes/:id
  // @desc      Delete a note
  // @access    Private
  delete: async (req, res) => {
    const id = req.params.id;

    try {
      await Note.deleteOne({ _id: id });

      res.status(200).json({ msg: "Note deleted successfully" });
    } catch (err) {
      console.error("Error:", err.message);
      res.status(500).json({ error: err.message });
    }
  }
};
