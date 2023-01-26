const Sequelize = require('sequelize');//ORM banco de dados

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/app.db'
});

module.exports = sequelize;