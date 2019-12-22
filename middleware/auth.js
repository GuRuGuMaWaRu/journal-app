const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const token = req.headers["x-auth-token"];

  try {
    const decoded = await jwt.verify(token, process.env.JWTSECRET);
    req.id = decoded.user;
    next();
  } catch (err) {
    console.error("Error:", err.message);
    res.status(422).json({ msg: "Token expired" });
  }
};
