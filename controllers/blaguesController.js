const { Blagues } = require('../models');
const { Sequelize } = require('sequelize');

exports.getAllBlagues = async (req, res) => {
  const blagues = await Blagues.findAll();
  res.json(blagues);
};

exports.getBlaguesById = async (req, res) => {
  const blagues = await Blagues.findByPk(req.params.id);
  if (!blagues) return res.status(404).json({ error: 'Blague non trouvée' });
  res.json(blagues);
};

exports.getRandomBlagues = async (req, res) => {
    try {
      const blagues = await Blagues.findOne({
        order: Sequelize.literal('RANDOM()')
      });
      if (blagues) {
        res.json(blagues);
      } else {
        res.status(404).json({ message: 'Aucune blague trouvée.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erreur serveur', error });
    }
  };

exports.createBlagues = async (req, res) => {
  const { question, answer } = req.body;
  if (!question || !answer) return res.status(400).json({ error: 'Champs requis' });
  const blagues = await Blagues.create({ question, answer });
  res.status(201).json(blagues);
};
