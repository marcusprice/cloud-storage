//TODO: write doc header
const User = require('../models/db').User

const validate = (email, enteredPassword) => {
  return new Promise((resolve, reject) => {
    //set default output
    let output = { validated: false }

    //get user from db
    User.findOne({where: {email: email}})
      .then((user) => {
        if(user && user.password === enteredPassword) {
          //if user exists and the password matches
          output.validated = true
        } else {
          //the validation wasn't succesful
          output.validated = false
          if(user) {
            //if the user exists the password was wrong
            output.reason = 'password'
          } else {
            output.reason = 'email'
          }
        }

        resolve(output)
      })
  })
}

module.exports = {
  validate: validate
}
