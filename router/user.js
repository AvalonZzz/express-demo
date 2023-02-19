const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();
router
  .post("/register", userController.register)
  .get("/list", userController.list);
module.exports = router;
