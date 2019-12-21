// const jwt = require("jsonwebtoken");

// module.exports = (req, res, next) => {
//   const token = req.header("x-auth-token");

//   if (!token) {
//     return res
//       .status(401)
//       .json({ msg: "No token provided, authorization denied" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWTSECRET);

//     req.user = decoded.user;
//     next();
//   } catch (err) {
//     console.error("Error:", err.message);
//     res.status(401).json({ msg: "Token is not valid" });
//   }
// };
