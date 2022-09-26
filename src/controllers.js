const { Client: Client7 } = require('es7')

const client = new Client7({
  node: process.env.ES_SERVER
})

module.exports = {
  log: (req, res, next) => {
    try {
      var today = new Date()

      var strDate = 'Y-m-d'
        .replace('Y', today.getFullYear())
        .replace('m', today.getMonth() + 1)
        .replace('d', today.getDate())

      let index = `applogs-${req.params.channel}-${strDate}`
      let message = req.body.message
      // remove message from the body output
      delete req.body['message']
      client.index({
        index: index,
        body: {
          '@timestamp': new Date(),
          'channel': req.params.channel,
          'level_name': req.params.level,
          '@headers': req.headers,
          'context': req.body,
          'message': message
        }
      }).then((data) => {
        res.send({
          status: "success",
          _id: data.body._id
        })
      }).catch(next)
    } catch (err) {
      next(err)
    }
  }
}