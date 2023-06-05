const express = require("express");
const router = express.Router();
const authRoutes = require("./auth.route");
const userRoutes = require("./users.route");

router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
module.exports = router;