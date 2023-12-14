const Timer = require("../models/timerModel");
const User = require("../models/userModel");
const mongoose = require("mongoose");

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
    // Extraction des paramètres d'URL
    const user_id = req.params.user_id;
    const timer_id = req.params.id;

    console.log("user_id dans la requête :", user_id);
    console.log("timer_id dans la requête :", timer_id);

    const isValidUserId = mongoose.Types.ObjectId.isValid(user_id);
    const isValidTimerId = mongoose.Types.ObjectId.isValid(timer_id);

    console.log("user_id est valide :", isValidUserId);
    console.log("timer_id est valide :", isValidTimerId);

    if (!isValidUserId || !isValidTimerId) {
      return res.status(400).json({ message: "ID invalide" });
    }

    const timer = await Timer.findByIdAndDelete(timer_id);

    if (timer) {
      res.status(200).json({ message: "Timer supprimé" });
    } else {
      res.status(404).json({ message: "Ce timer n'existe plus" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

exports.avgTimer = async (req, res) => {
  try {
    const user_id = req.params.user_id;

    const isValidUserId = mongoose.Types.ObjectId.isValid(user_id);
    if (!isValidUserId) {
      return res.status(400).json({ message: "ID utilisateur invalide" });
    }

    const timers = await Timer.find({ user_id });

    if (timers.length === 0) {
      return res
        .status(404)
        .json({ message: "Aucun timer trouvé pour cet utilisateur" });
    }

    const totalMilliseconds = timers.reduce(
      (acc, timer) => acc + timer.time,
      0
    );
    const averageTime = totalMilliseconds / timers.length;

    res.status(200).json({ averageTime });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

exports.getBestTime = async (req, res) => {
  try {
    const user_id = req.params.user_id;

    const isValidUserId = mongoose.Types.ObjectId.isValid(user_id);
    if (!isValidUserId) {
      return res.status(400).json({ message: "ID utilisateur invalide" });
    }

    const timers = await Timer.find({ user_id });

    if (timers.length === 0) {
      return res
        .status(404)
        .json({ message: "Aucun timer trouvé pour cet utilisateur" });
    }

    const minTime = Math.min(...timers.map((timer) => timer.time));

    res.status(200).json({ message: `Best time: ${minTime}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

exports.getWorstTime = async (req, res) => {
  try {
    const user_id = req.params.user_id;

    const isValidUserId = mongoose.Types.ObjectId.isValid(user_id);
    if (!isValidUserId) {
      return res.status(400).json({ message: "ID utilisateur invalide" });
    }

    const timers = await Timer.find({ user_id });

    if (timers.length === 0) {
      return res
        .status(404)
        .json({ message: "Aucun timer trouvé pour cet utilisateur" });
    }

    const maxTime = Math.max(...timers.map((timer) => timer.time));

    res.status(200).json({ message: `Worst time: ${maxTime}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};
