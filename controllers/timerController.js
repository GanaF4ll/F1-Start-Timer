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

exports.listOneTimer = async (req, res) => {
  try {
    const timer = await Timer.findById(req.params.timer_id);
    if (!timer) {
      res.status(404).json({ message: "Timer non trouvé" });
      return;
    }
    res.status(200).json(timer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.deleteATimer = async (req, res) => {
  try {
    const timer = await Timer.findByIdAndDelete(req.params.id);

    if (timer) {
      res.status(200).json({ message: "Timer supprimé" });
    } else {
      res.status(404).json({ message: "Ce timer n'existe plus" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
