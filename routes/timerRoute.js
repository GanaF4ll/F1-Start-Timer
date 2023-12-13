const express = require("express");
const router = express.Router();
const timerController = require("../controllers/timerController");

router.get("/:user_id/timers", timerController.listAllTimers);
// url = http://localhost:3001/:user_id/timers

router.post("/:user_id/timers/create", timerController.createATimer);
// url = http://localhost:3001/:user_id/timers/create

router.get("/:user_id/timers/:id", timerController.listOneTimer);
// url = http://localhost:3001/:user_id/timers/:id

module.exports = router;
