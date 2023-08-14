const Sequelize = require(`sequelize`);
const sequelize = new Sequelize(`ecart`, `root`, `alok`, {
  dialect: `mysql`,
  host: `localhost`,
});
module.exports = sequelize;
