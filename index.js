require('dotenv').config()
const mware = require('./src/middleware')
const controllers = require('./src/controllers')

'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const winston = require('winston')
const expressWinston = require('express-winston');
const app = express()
const port = process.env.APP_PORT || 3000

app.use(bodyParser.json({ limit: "50mb" })) // for parsing application/json
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000})) // for parsing application/x-www-form-urlencoded

app.use(expressWinston.logger({
    transports: [
      new winston.transports.Console()
    ],
    format: winston.format.combine(
      //winston.format.colorize(),
      winston.format.json()
    ),
    meta: false,
    expressFormat: true,
    colorize: false
}));

app.post('/:level/:channel', mware.validateLevels, controllers.log)

app.use(mware.allErrorsRedirect)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
