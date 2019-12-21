const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const auth = require("../middleware/auth");
const notesController = require("../controllers/notes");

// @route     GET api/notes
// @desc      Get all notes
// @access    Private
router.get("/", notesController.index);

// @route     POST api/notes
// @desc      Create a note
// @access    Private
router.post(
  "/",
  [
    check("title")
      .not()
      .isEmpty()
      .trim(),
    check("body")
      .not()
      .isEmpty()
      .trim()
  ],
  notesController.create
);

// @route     GET api/notes/:id
// @desc      Get a note
// @access    Private
router.get("/:id", notesController.read);

// @route     PATCH api/notes/:id
// @desc      Edit a note
// @access    Private
router.patch("/:id", notesController.update);

// @route     DELETE api/notes/:id
// @desc      Delete a note
// @access    Private
router.delete("/:id", notesController.delete);

module.exports = router;
