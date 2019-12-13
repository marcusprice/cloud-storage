const Sequelize = require('sequelize');
const credentials = require('../config/credentials')
const User = require('./User')

//connect to db
const sequelize = new Sequelize(credentials.db.database, credentials.db.username, credentials.db.password, {
  host: credentials.db.host,
  dialect: 'postgres'
})

//exports will be individual models
module.exports = {
  User: User(sequelize, Sequelize),
  sequelize: sequelize
}
