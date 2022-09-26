const config = require('./config')
const Sentry = require('@sentry/node')

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
    try {
      if (!config.levels.includes(req.params.level)) {
        console.log('levels', config.levels)
        throw new Error(`level has to be one of ${config.levels}`)
      }
    } catch (err) {
      next(err)
    }
    next()
  }
}