const express = require("express");
const router = express.Router();
const timerController = require("../controllers/timerController");

router.get("/user_id/timers", timerController.getAllTimers);
// url = http://localhost:3001/user_id/timers

router.post("/user_id/create/timer", timerController.createATimer);
// url = http://localhost:3001/user_id/create/timer
