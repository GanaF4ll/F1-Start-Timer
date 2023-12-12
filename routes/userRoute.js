const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/user/register", userController.userRegister);
// http://localhost:3001/user/register

router.post("/user/login", userController.userLogin);
//http://localhost:3001/user/login

router.delete("/user/delete/:id", userController.userDelete);
http: module.exports = router;
