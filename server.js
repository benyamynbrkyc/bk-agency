const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname)))
app.use(bodyParser.urlencoded({ extended: false }))

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(PORT, () => {
  console.log(`Server is listening on localhost:${PORT}`)
})
