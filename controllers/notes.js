const Note = require("../models/Note");

module.exports = {
  // @route     GET api/notes
  // @desc      Get all notes
  // @access    Private
  index: async (req, res) => {
    const userId = req.id;

    try {
      const notes = await Note.find({ user: userId }, "title body date");
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
    const userId = req.id;
    const { title, body } = req.body;

    try {
      const note = await Note.create({
        user: userId,
        title,
        body
      });

      res.status(201).json({
        _id: note._id,
        date: note.date,
        title: note.title,
        body: note.body
      });
    } catch (err) {
      console.error("Error:", err.message);
      res.status(500).json({ error: err.message });
    }
  },
  // @route     GET api/notes/:id
  // @desc      Get a note
  // @access    Private
  read: async (req, res) => {
    const userId = req.id;
    const id = req.params.id;

    try {
      const note = await Note.findOne(
        { _id: id, user: userId },
        "date title body"
      );

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
    const userId = req.id;
    const id = req.params.id;
    const updatedNote = { ...req.body, date: Date.now() };

    try {
      const updated = await Note.findOneAndUpdate(
        { _id: id, user: userId },
        updatedNote,
        { new: true }
      );
      console.log(updated);
      res.status(200).json(updated);
    } catch (err) {
      console.error("Error:", err.message);
      res.status(500).json({ error: err.message });
    }
  },
  // @route     DELETE api/notes/:id
  // @desc      Delete a note
  // @access    Private
  delete: async (req, res) => {
    const userId = req.id;
    const id = req.params.id;

    try {
      await Note.deleteOne({ _id: id, user: userId });

      res.status(200).json({ msg: "Note deleted successfully" });
    } catch (err) {
      console.error("Error:", err.message);
      res.status(500).json({ error: err.message });
    }
  }
};
