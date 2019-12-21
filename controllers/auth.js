const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

module.exports = {
  get: async (req, res) => {
    res.status(200).json({ msg: "Get a logged in user" });
  },
  // @route     POST api/auth
  // @desc      Auth user & get token
  // @access    Public
  login: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ error: errors.array() });
    }

    try {
      const user = await User.findOne({ email: req.body.email }, "-email");

      if (!user) {
        return res.status(422).json({ msg: "Authorization failed" });
      }

      const comparedPasswords = bcryptjs.compare(
        req.body.password,
        user.password
      );

      if (!comparedPasswords) {
        return res.status(422).json({ msg: "Authorization failed" });
      }

      jwt.sign(
        { user: user._id },
        process.env.JWTSECRET,
        { expiresIn: "24h" },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({ name: user.name, token: token });
        }
      );
    } catch (err) {
      console.error("Error:", err.message);
      res.status(500).json({ error: err.message });
    }
  }
};
