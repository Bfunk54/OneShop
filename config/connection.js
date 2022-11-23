// Require Sequelize
const Sequelize = require('sequelize');
require('dotenv').config();

// Create connection to our database
let sequelize;

// Connect to JAWSDB on Heroku, otherwise use local database
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
