const express = require("express");
const router = express.Router();
const timerController = require("../controllers/timerController");

router.get("/user_id/timers", timerController.getTimers);
