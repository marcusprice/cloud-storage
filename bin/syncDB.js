#!/usr/bin/env node

/**
 *syncDB.js - syncs database before starting app
 */

const sequelize = require('../models/db').sequelize
const User = require('../models/db').User

//sync db
sequelize.sync({ force: true })
  .then(() => {
    //create an example user for testing
    return User.create({
      firstName: 'John',
      email: 'john@example.com',
      password: 'password',
      storageLimit: 2000000000
    })
  })
  .then(() => {
    //create another example user for testing
    return User.create({
      firstName: 'Mike',
      email: 'mike@example.com',
      password: 'password',
      storageLimit: 2000000000
    })
  })
  .then(() => {
    //end the program
    process.exit()
  })
  .catch((err) => {
    console.error(err)
  })
