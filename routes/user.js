const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const userController = require("../controllers/user");

// @route     POST api/user
// @desc      Register a user
// @access    Public
router.post(
  "/",
  [
    check("name", "Please add name")
      .not()
      .isEmpty()
      .trim(),
    check("email", "Please add email").isEmail(),
    check("password", "Please enter a password with 6 or more characters")
      .trim()
      .isLength({ min: 6 })
  ],
  userController.register
);

module.exports = router;
