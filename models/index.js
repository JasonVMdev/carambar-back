const sequelize = require('../config/database');
const Blagues = require('./blagues');

sequelize.sync();

module.exports = {
  sequelize,
  Blagues,
};
