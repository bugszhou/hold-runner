if (process.env.NODE_ENV === 'development') {
  module.exports = require('./dist/hold-runner.js')
} else {
  module.exports = require('./dist/hold-runner.common.js')
}
