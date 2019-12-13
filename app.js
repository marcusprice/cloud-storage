const express = require('express')
const app = express()
const port = process.env.PORT || 5000

//sets static files to to the client build directory
app.use(express.static(__dirname + '/client/build'))

//send client app
app.get('/', (req, res) => {
  res.sendFile('index.html');
})

app.listen(port, () => {
  console.log('listening on port ' + port)
})
