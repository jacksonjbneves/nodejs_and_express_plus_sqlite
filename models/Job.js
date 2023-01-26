const Sequelize = require('sequelize'); //ORM do banco de dados
const db = require('../db/connection');

const Job = db.define('job', {
  titleAc: {
   type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  salary: {
    type: Sequelize.STRING,
  },
  company: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  new_job: {
    type: Sequelize.INTEGER,
  }
});
module.exports = Job