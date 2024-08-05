const express = require("express");
const router = express.Router();
// auth middleware
const authMiddleware = require("../middleware/authMiddleware");
const { StatusCodes } = require("http-status-codes");

// question routes
router.get("/all-answers", authMiddleware, (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "All answers" });
});

module.exports = router;