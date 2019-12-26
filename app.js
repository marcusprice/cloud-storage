const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const session = require('express-session')
const bodyParser = require('body-parser')
const credentials = require(__dirname + '/config/credentials')

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
//to parse post requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//send client app
app.get('/', (req, res) => {
  res.sendFile('index.html')
})

//routes
require(__dirname + '/routes/auth')(app)

app.listen(port, () => {
  console.log('listening on port ' + port)
})
