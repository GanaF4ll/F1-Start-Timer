const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { verifyToken } = require("../middlewares/jwtMiddleware");

router.post("/user/register", userController.userRegister);
// url = http://localhost:3001/user/register

router.post("/user/login", userController.userLogin);
// url = http://localhost:3001/user/login

router.delete("/user/delete/:email", verifyToken, userController.userDelete);
// url = http://localhost:3001/user/delete/:email

router.put("/user/update/:email", verifyToken, userController.userUpdate);
// url = http://localhost:3001/user/update/:email

module.exports = router;
