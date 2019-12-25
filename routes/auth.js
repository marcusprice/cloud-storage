const user = require('../controllers/user')

module.exports = (app) => {
  //check if user is logged in
  app.get('/loginCheck', (req, res) => {
    //login status & output variable
    const loginStatus = req.session.loggedIn
    let output

    if(!loginStatus) {
      //if the login status is either undefined or false return false object to client
      output = {loggedIn: false}
    } else {
      //the user is logged in, send true object to client
      output = {loggedIn: true}
    }

    res.json(output)
  })

  //login endpoint
  //TODO: send directory data
  app.post('/login', async (req, res) => {
    let output
    if(req.session.loggedIn) {
      //if user is already logged in skip the password check
      output = { loggedIn: true }
    } else {
      //email, password & validation vars
      let email = req.body.email
      let password = req.body.password
      let validated = false

      result = await user.validate(email, password)

      if(result.success) {
        //user is validated, set logged in session to true
        req.session.loggedIn = true

        //return logged in true object
        output = { loggedIn: true }
      } else {
        //return logged in false object with reason why it wasn't validated
        output = { loggedIn: false, reason: result.reason }
      }
    }

    //send result back
    res.json(output)
  })
}
