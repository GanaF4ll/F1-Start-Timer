const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { verifyToken } = require("../middlewares/jwtMiddleware");

/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Enregistre un nouvel utilisateur.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             email: gateau@gateau.com
 *             password: "gateau"
 *             role: 1
 *     responses:
 *       201:
 *         description: Requête réussie.
 *         content:
 *           application/json:
 *             example:
 *               message: 'Utilisateur créé : ${user.email}'
 */
router.post("/user/register", userController.userRegister);
// url = http://localhost:3001/user/register

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Connecte un utilisateur existant.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             email: gateau@gateau.com
 *             password: "gateau"
 *     responses:
 *       200:
 *         description: Requête réussie.
 *         content:
 *           application/json:
 *             example:
 *               message: 'Connexion réussie.'
 */
router.post("/user/login", userController.userLogin);
// url = http://localhost:3001/user/login

/**
 * @swagger
 * /user/delete/{email}:
 *   delete:
 *     summary: Supprime un utilisateur s'il a l'autorisation nécessaire (token).
 *     headers:
 *       Authorization:
 *         description: JWT_KEY
 *     parameters:
 *       - in: path
 *         name: email
 *         description: L'adresse e-mail de l'utilisateur à supprimer.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Requête réussie.
 *         content:
 *           application/json:
 *             example:
 *               message: 'Utilisateur supprimé : ${user.email}'
 */
router.delete("/user/delete/:email", verifyToken, userController.userDelete);
// url = http://localhost:3001/user/delete/:email

/**
 * @swagger
 * /user/update/{email}:
 *   put:
 *     summary: Modifie les données d'un utilisateur s'il a l'autorisation nécessaire (token).
 *     headers:
 *       Authorization:
 *         description: JWT_KEY
 *     parameters:
 *       - in: path
 *         name: email
 *         description: L'adresse e-mail de l'utilisateur à mettre à jour.
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             email: gateau@gateau.com
 *             password: "gateau"
 *     responses:
 *       200:
 *         description: Requête réussie.
 *         content:
 *           application/json:
 *             example:
 *               message: 'ok'
 */
router.put("/user/update/:email", verifyToken, userController.userUpdate);
// url = http://localhost:3001/user/update/:email

/**
 * @swagger
 * /user/patch/{email}:
 *   patch:
 *     summary: Modifie les données d'un utilisateur s'il a l'autorisation nécessaire (token).
 *     headers:
 *       Authorization:
 *         description: JWT_KEY
 *     parameters:
 *       - in: path
 *         name: email
 *         description: L'adresse e-mail de l'utilisateur à mettre à jour.
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             email: gateau@gateau.com
 *             password: "gateau"
 *     responses:
 *       200:
 *         description: Requête réussie.
 *         content:
 *           application/json:
 *             example:
 *               message: 'L\'email de l\'utilisateur a été modifié: ${user.email}'
 */
router.patch("/user/patch/:email", verifyToken, userController.userUpdate);
// url = http://localhost:3001/user/patch/:email

module.exports = router;
