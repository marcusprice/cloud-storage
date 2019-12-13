#!/usr/bin/env node

/**
 *syncDB.js - syncs database before starting app
 */

const sequelize = require('../models/db').sequelize

//sync db
sequelize.sync()
  .then(() => {
    console.log('database synced')
  })
  .catch((err) => {
    console.error(err)
  })
