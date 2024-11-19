// db_config.js
const Sequelize = require('sequelize');
const sequelize = new Sequelize('erp_database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
