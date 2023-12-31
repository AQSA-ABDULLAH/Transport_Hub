const jwt = require('jsonwebtoken')
const UserModel = require("../models/Users.js");

var isAuthenticated = async (req, res, next) => {
  // get token from header
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      token = authorization.split(" ")[1];

      //Verify token
      const { userId } = jwt.verify(token, process.env.JWT_SECRET_KEY);

      //Get user from token
      req.user = await UserModel.findById(userId).select('-password');
      next();
    } catch (error) {
      res.status(401).send({ status: "failed", message: "Unauthorized User" });
    }
  }
  if (!token)
    return res.status(401).send({ status: "failed", message: "Unauthorized User, No Token" });
};

module.exports = isAuthenticated;