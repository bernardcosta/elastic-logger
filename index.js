require('dotenv').config()

'use strict'

const { Client: Client7 } = require('es7')

const client = new Client7({
  node: process.env.ES_SERVER
})

const express = require('express')
const bodyParser = require('body-parser')
const winston = require('winston')
const expressWinston = require('express-winston');

const app = express()
const port = 3000

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

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

app.post('/:level/:channel', (req, res) => {


 var today = new Date();

  var strDate = 'Y-m-d'
    .replace('Y', today.getFullYear())
    .replace('m', today.getMonth()+1)
    .replace('d', today.getDate());

  let index = `applogs-${req.params.channel}-${strDate}`;
  client.index({
    index: index,
    body: {
      '@timestamp': new Date(),
      '@channel': req.params.channel,
      '@level': {
         'name' : req.params.level
      },
      '@headers': req.headers,
      '@payload': req.body
    }
  }).then((data) => {
    res.send(data.body._id)
  }).catch((err) => {

   conosole.error(err);
   res.status(500).send('err');
  });

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
