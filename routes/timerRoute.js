const express = require("express");
const router = express.Router();
const timerController = require("../controllers/timerController");

router.get("/:user_id/alltimers", timerController.listAllTimers);
// url = http://localhost:3001/:user_id/alltimers

router.post("/:user_id/timer", timerController.createATimer);
// url = http://localhost:3001/:user_id/timer

router.get("/:user_id/timers/:id", timerController.listOneTimer);
// url = http://localhost:3001/:user_id/timers/:id

router.delete("/:user_id/timer/:id", timerController.deleteATimer);
// url = http://localhost:3001/:user_id/timer/:id

router.get("/:user_id/avgtimer", timerController.avgTimer);
// url = http://localhost:3001/:user_id/avgtimer

module.exports = router;
