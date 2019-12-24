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

  res.json(loginStatus)
})

app.listen(port, () => {
  console.log('listening on port ' + port)
})
