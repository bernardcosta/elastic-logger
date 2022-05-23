const config = require('./config')

module.exports = {
  // send all errors to output in application/json format
  allErrorsRedirect: (err, req, res, next) => {
    console.error(err)
    res.status(err.status || 500).json({
      status: err.status,
      message: err.message,
    })
  },
  validateLevels: (req, res, next) => {
    if (!config.levels.includes(req.params.level)) {
      console.log("levels", config.levels)
      throw {
        status: 400,
        message: `level has to be one of ${config.levels}`
      }
    }
    next()
  }
}