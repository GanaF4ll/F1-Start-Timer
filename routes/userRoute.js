const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/user/register", userController.userRegister);
// url = http://localhost:3001/user/register

router.post("/user/login", userController.userLogin);
// url = http://localhost:3001/user/login

router.delete("/user/delete/:email", userController.userDelete);
// url = http://localhost:3001/user/delete/:email

router.put("/user/update/:email", userController.userUpdate);
// url = http://localhost:3001/user/update/:email
http: module.exports = router;
