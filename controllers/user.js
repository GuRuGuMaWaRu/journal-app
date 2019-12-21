const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

module.exports = {
  register: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        return res.status(422).json({ msg: "Registration failed" });
      }

      user = new User(req.body);

      // Hash password
      const salt = await bcryptjs.genSalt(10);
      user.password = await bcryptjs.hash(user.password, salt);

      await user.save();

      // Create token
      jwt.sign(
        { user: user._id },
        process.env.JWTSECRET,
        { expiresIn: "24h" },
        (err, token) => {
          if (err) throw err;
          res.status(201).json(token);
        }
      );
    } catch (err) {
      console.error("Error:", err.message);
      res.status(500).json({ error: err.message });
    }
  }
};
