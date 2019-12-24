const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const session = require('express-session')
const bodyParser = require('body-parser')
const credentials = require(__dirname + '/config/credentials')
const user = require(__dirname + '/controllers/user')

//app uses sessions to manage logged in state & other security measures
app.use(session({
  secret: credentials.sessions.secretKey,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false
  }
}))

//sets static files to to the client build directory
app.use(express.static(__dirname + '/client/build'))

//send client app
app.get('/', (req, res) => {
  res.sendFile('index.html')
})

//login endpoint
app.post('/login', (req, res) => {
  let output
  if(req.session.loggedIn) {
    //if user is already logged in skip the password check
    output = { loggedIn: true }
  } else {
    //email, password & validation vars
    let email = req.body.email
    let password = req.body.password
    let validated = false

    //check if password is correct
    validated = user.validate(email, password)
    if(validated.success) {
      //user is validated, set logged in session to true
      req.session.loggedIn = true

      //return logged in true object
      output = { loggedIn: true }
    } else {
      //return logged in false object with reason why it wasn't validated
      output = { loggedIn: false, reason: validated.reason }
    }
  }

  //send result back
  res.json(output)
})

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

app.listen(port, () => {
  console.log('listening on port ' + port)
})
