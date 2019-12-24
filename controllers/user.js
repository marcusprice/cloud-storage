//TODO: write doc header
const User = require('../models/db').User

const validate = (email, enteredPassword, callback) => {
  //set default output
  let output = {success: false, reason: null}
  //get user from db
  User.findOne({where: {email: email}})
    .then((user) => {
      if(user && user.password === enteredPassword) {
        //if user exists and the password matches
        output.success = true
      } else {
        //the validation wasn't succesful
        output.success = false
        if(user) {
          //if the user exists the password was wrong
          output.reason = 'password'
        } else {
          output.reason = 'email'
        }
      }

      callback(null, output)
    })
}

module.exports = {
  validate: validate
}
