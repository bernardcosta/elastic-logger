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
      client.index({
        index: index,
        body: {
          '@timestamp': new Date(),
          '@channel': req.params.channel,
          '@level': {
            'name': req.params.level
          },
          '@headers': req.headers,
          '@payload': req.body
        }
      }).then((data) => {
        res.send({
          status: "success",
          _id: data.body._id
        })
      }).catch((err) => {
        conosole.error(err)
        res.status(500).json({
          status: err.status,
          message: err.message
        })
      })
    } catch (err) {
      next(err)
    }
  }
}