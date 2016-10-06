'use strict'
var rangeInclusive = require('range-inclusive')

module.exports = function rangeExclusive (start, stop, stepSize) {
  var range = rangeInclusive(start, stop, stepSize)
  range.pop()
  return range
}
