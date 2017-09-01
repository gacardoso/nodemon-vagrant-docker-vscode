const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World! Hello Vagrant! Hello Docker! Hello Nodemon! Hello Debug VS Code!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})