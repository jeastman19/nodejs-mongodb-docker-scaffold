const express = require('express')
const app = express()
const chalk = require('chalk')
const mongoose = require('mongoose')

const MONGO_URL = 'mongodb://mongo:27017'
const MONGO_DATABASE_LOCAL = 'base_de_datos'
const PORT=3000

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: MONGO_DATABASE_LOCAL,
})

mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () =>
  console.log(
    `${chalk.green('[Consultas-Dominios-API]:')} server listening on port ${PORT}`
  )
)
