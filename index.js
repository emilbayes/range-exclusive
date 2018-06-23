'use strict'
var rangeInclusive = require('range-inclusive')

module.exports = function rangeExclusive (start, stop, stepSize) {
  if (stop == null) return rangeExclusive(1, start)
  if (stepSize == null) return rangeExclusive(start, stop, 1)

  var range = rangeInclusive(start, stop, stepSize)
  if (stop % stepSize === 0) range.pop()
  return range
}
