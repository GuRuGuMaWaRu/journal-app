const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const auth = require("../middleware/auth");

// @route     GET api/notes
// @desc      Get all notes
// @access    Private
router.get("/", auth, (req, res) => {
  res.json({ msg: "Get all notes" });
});

// @route     GET api/notes/:id
// @desc      Get a note
// @access    Private
router.get("/:id", auth, (req, res) => {
  res.json({ msg: "Get a note" });
});

// @route     POST api/notes
// @desc      Create a note
// @access    Private
router.post("/", auth, (req, res) => {
  res.json({ msg: "Create a note" });
});

// @route     PATCH api/notes/:id
// @desc      Edit a note
// @access    Private
router.patch("/:id", auth, (req, res) => {
  res.json({ msg: "Edit a note" });
});

// @route     DELETE api/notes/:id
// @desc      Delete a note
// @access    Private
router.delete("/:id", auth, (req, res) => {
  res.json({ msg: "Delete a note" });
});

module.exports = router;
