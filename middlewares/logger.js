const jwt = require("jsonwebtoken");
const User = require("../model/user");

exports.Logger = async (req, res, next) => {
  try {
    let token;
    if (!req.headers.authorization && !req.headers.authorization.startsWith("Bearer")) {
      return res.status(400).json({
        success: false,
        error: "таны эрх хүрэхгүй байна",
      });
    }
    token = req.headers.authorization.split(" ")[1];

    let user = await jwt.verify(token, process.env.JWT_SECRET);
    req.userId = user.id;
    req.userEmail = user.email;
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error,
    });
  }

  req.isAdmin = User.role === "admin";
  

  next();
};