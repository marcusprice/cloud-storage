const user = require('../controllers/user')

module.exports = (app) => {
  //check if user is logged in
  app.get('/loginCheck', (req, res) => {
    //login status & output variable
    const loginStatus = req.session.loggedIn
    const rememberMe = req.session.rememberMe
    let output

    if(!loginStatus || !rememberMe) {
      //the user either isn't logged in or has remember me set to false
      //set login status session to false (in the case that remember me wasn't selected)
      req.session.loggedIn = false

      //if the login status is either undefined or false return false object to client
      output = {loggedIn: false}
    } else {
      //the user is logged in, send true object to client
      output = {loggedIn: true}
    }

    res.json(output)
  })

  //login endpoint
  //TODO: filter post variables/send directory data
  app.post('/login', async (req, res) => {
    //login status & output variable
    const loginStatus = req.session.loggedIn
    let output

    if(loginStatus) {
      //if user is already logged in skip the password check
      output = { loggedIn: true }
    } else {
      //email, password & validation vars
      let email = req.body.email
      let password = req.body.password
      let rememberMe = req.body.rememberMe
      //validate user
      let result = await user.validate(email, password)

      if(result.validated) {
        //user is validated, set logged in session to true & remember me to their preference
        req.session.loggedIn = true
        req.session.rememberMe = rememberMe
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

  app.get('/logout', (req, res) => {
    req.session.loggedIn = false
    req.session.rememberMe = false
    res.json({ loggedOut: true })
  })
}
