const Timer = require("../models/timerModel");
// const jwt = require("jsonwebtoken");
// require('dotenv').config();

exports.createATimer = async (req, res) => {
  try {
    let newTimer = new Timer(req.body);
    let timer = await newTimer.save();
    res.status(201).json({ message: `Timer crée: ${timer.time}` });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Requete invalide" });
  }
};
