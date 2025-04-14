const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Blagues = sequelize.define('Blagues', {
  question: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  answer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Blagues;
