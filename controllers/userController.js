const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");

exports.userRegister = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      email: req.body.email,
      password: hashedPassword,
      role: req.body.role,
    });
    const user = await newUser.save();
    res.status(201).json({ message: `Utilisateur créé : ${user.email}` });
    o;
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la création de l'utilisateur" });
  }
};

exports.userLogin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      res.status(401).json({ message: "Email ou mot de passe incorrect" });
      return;
    }

    const userData = {
      id: user._id,
      email: user.email,
      role: "admin",
    };
    const token = jwt.sign(userData, process.env.JWT_KEY, {
      expiresIn: "10h",
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Une erreur s'est produite lors de la connexion" });
  }
};

exports.userDelete = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ email: req.body.email });
    if (user) {
      res.status(200).json({ message: `Utilisateur supprimé : ${user.email}` });
    } else {
      res.status(404).json({ message: "L'utilisateur n'existe pas" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message:
        "Une erreur s'est produite lors de la suppression de l'utilisateur",
    });
  }
};

exports.userUpdate = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { email: req.body.email },
      req.body,
      {
        new: true,
      }
    );

    if (user) {
      res.status(200).json({
        message: `L'email de l'utilisateur a été modifié: ${user.email}`,
      });
    } else {
      res.status(404).json({ message: "L'utilisateur n'existe pas" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message:
        "Une erreur s'est produite lors de la mise à jour de l'utilisateur",
    });
  }
};
