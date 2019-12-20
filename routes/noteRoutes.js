const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "Get all notes" });
});
router.get("/:id", (req, res) => {
  res.json({ msg: "Get a note" });
});
router.post("/:id", (req, res) => {
  res.json({ msg: "Create a note" });
});
router.patch("/:id", (req, res) => {
  res.json({ msg: "Edit a note" });
});
router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete a note" });
});

module.exports = router;
