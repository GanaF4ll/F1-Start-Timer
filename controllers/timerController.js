const Timer = require("../models/timerModel");
const User = require("../models/userModel");

exports.listAllTimers = async (req, res) => {
  try {
    const timers = await Timer.find({ user_id: req.params.user_id });
    res.status(200).json(timers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.createATimer = async (req, res) => {
  try {
    const user = await User.findById(req.params.user_id);

    if (!user) {
      res.status(404).json({ message: "Utilisateur non trouvé" });
      return;
    }

    const newTimer = new Timer({
      user_id: req.params.user_id,
      ...req.body,
    });

    try {
      const savedTimer = await newTimer.save();
      res.status(201).json(savedTimer);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur serveur (db)." });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur serveur (utilisateur inexistant)." });
  }
};
