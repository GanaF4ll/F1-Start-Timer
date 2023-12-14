const express = require("express");
const router = express.Router();
const timerController = require("../controllers/timerController");

/**
 * @swagger
 * /{user_id}/alltimers:
 *   get:
 *     summary: Récupère la liste de tous les timers pour un utilisateur.
 *     parameters:
 *       - in: path
 *         user_id: 213dfe
 *         description: L'ID de l'utilisateur.
 *         required: true
 *         time:
 *          type: Number
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Requête réussie.
 *         content:
 *           application/json:
 *             example:
 *               timers: [ { id: 1, user_id: 213dfe, time: 3000 }, { id: 2, user_id: 213dfe, time: 2000 } ]
 */
router.get("/:user_id/alltimers", timerController.listAllTimers);
// url = http://localhost:3001/:user_id/alltimers

/**
 * @swagger
 * /{user_id}/timer:
 *   post:
 *     summary: Crée un nouveau timer pour un utilisateur.
 *     parameters:
 *       - in: path
 *         user_id: 213dfe
 *         description: L'ID de l'utilisateur.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Requête réussie.
 *         content:
 *           application/json:
 *             example:
 *               message: 'json(savedTimer)'
 */
router.post("/:user_id/timer", timerController.createATimer);
// url = http://localhost:3001/:user_id/timer

/**
 * @swagger
 * /{user_id}/timers/{id}:
 *   get:
 *     summary: Récupère un timer spécifique pour un utilisateur.
 *     parameters:
 *       - in: path
 *         user_id: 213dfe
 *         description: L'ID de l'utilisateur.
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         id: 1
 *         description: L'ID du timer.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Requête réussie.
 *         content:
 *           application/json:
 *             example:
 *               timer: 'json(timer)'
 */
router.get("/:user_id/timers/:id", timerController.listOneTimer);
// url = http://localhost:3001/:user_id/timers/:id

/**
 * @swagger
 * /{user_id}/timer/{id}:
 *   delete:
 *     summary: Supprime un timer spécifique pour un utilisateur.
 *     parameters:
 *       - in: path
 *         user_id: 213dfe
 *         description: L'ID de l'utilisateur.
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         id: 1
 *         description: L'ID du timer.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Requête réussie.
 *         content:
 *           application/json:
 *             example:
 *               message: { message: "Timer supprimé" }
 */
router.delete("/:user_id/timer/:id", timerController.deleteATimer);
// url = http://localhost:3001/:user_id/timer/:id

/**
 * @swagger
 * /{user_id}/avgtimer:
 *   get:
 *     summary: Récupère la moyenne des temps des timers pour un utilisateur.
 *     parameters:
 *       - in: path
 *         user_id: 213dfe
 *         description: L'ID de l'utilisateur.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Requête réussie.
 *         content:
 *           application/json:
 *             example:
 *               averageTime: 1500
 */
router.get("/:user_id/avgtimer", timerController.avgTimer);
// url = http://localhost:3001/:user_id/avgtimer

/**
 * @swagger
 * /{user_id}/best:
 *   get:
 *     summary: Récupère le meilleur temps parmi les timers d'un utilisateur.
 *     parameters:
 *       - in: path
 *         user_id: 213dfe
 *         description: L'ID de l'utilisateur.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Requête réussie.
 *         content:
 *           application/json:
 *             example:
 *               bestTime: 1000
 */
router.get("/:user_id/best", timerController.getBestTime);
// url = http://localhost:3001/:user_id/best

/**
 * @swagger
 * /{user_id}/worst:
 *   get:
 *     summary: Récupère le pire temps parmi les timers d'un utilisateur.
 *     parameters:
 *       - in: path
 *         user_id: 213dfe
 *         description: L'ID de l'utilisateur.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Requête réussie.
 *         content:
 *           application/json:
 *             example:
 *               worstTime: 3000
 */
router.get("/:user_id/worst", timerController.getWorstTime);
// url = http://localhost:3001/:user_id/worst

module.exports = router;
