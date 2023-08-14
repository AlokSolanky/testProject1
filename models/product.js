const Sequelize = require(`sequelize`);
const sequelize = require(`../utils/database`);
const User = sequelize.define(`products`, {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  amount: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;
