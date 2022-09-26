const config = require('./config')

module.exports = {
  // send all errors to output in application/json format
  allErrorsRedirect: (err, req, res, next) => {
    console.log(err)
    let out = {
      message: err.message
    }
    if ('sentry' in res) {
      out.sentry_id = res.sentry
    }
    if ('status' in err) {
      out.status = err.status
    }
    res.status(err.status || 500).json(out)
  },
  validateLevels: (req, res, next) => {
    if (!config.levels.includes(req.params.level)) {
      console.log('levels', config.levels)
      throw {
        status: 400,
        message: `level has to be one of ${config.levels}`
      }
    }
    next()
  }
}