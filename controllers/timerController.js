const Timer = require("../models/timerModel");

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
    const user = await Timer.findById(req.params.user_id);

    if (!user) {
      res.status(404).json({ message: "Utilisateur non trouvé" });
      return;
    }

    const newTimer = new Timer({
      ...req.body,
      user_id: req.params.user_id,
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
