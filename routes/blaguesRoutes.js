const express = require('express');
const router = express.Router();
const blaguesController = require('../controllers/blaguesController');

/**
 * @swagger
 * /:
 *   get:
 *     summary: Récupère toutes les blagues
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: Liste de toutes les blagues
 */
router.get('/', blaguesController.getAllBlagues);

/**
 * @swagger
 * /random:
 *   get:
 *     summary: Récupère une blague aléatoire
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: Une blague random
 */
router.get('/random', blaguesController.getRandomBlagues);

/**
 * @swagger
 * /{id}:
 *   get:
 *     summary: Récupère une blague par ID
 *     tags: [Blagues]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Une seule blague
 *       404:
 *         description: Blague non trouvée
 */
router.get('/:id', blaguesController.getBlaguesById);

/**
 * @swagger
 * /:
 *   post:
 *     summary: Ajoute une nouvelle blague
 *     tags: [Blagues]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *               answer:
 *                 type: string
 *     responses:
 *       201:
 *         description: Blague ajoutée
 */
router.post('/', blaguesController.createBlagues);

module.exports = router;
