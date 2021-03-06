const test = require('tape')
const rangeExclusive = require('.')

test('single number', function (assert) {
  assert.deepEqual(rangeExclusive(10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
  assert.end()
})
test('range', function (assert) {
  assert.deepEqual(rangeExclusive(5, 7), [5, 6])
  assert.end()
})
test('range, step size', function (assert) {
  assert.deepEqual(rangeExclusive(3, 9, 3), [3, 6])
  assert.end()
})
test('range, step size non-divisor', function (assert) {
  assert.deepEqual(rangeExclusive(2, 5, 2), [2, 4])
  assert.end()
})
test('negative range, step size', function (assert) {
  assert.deepEqual(rangeExclusive(7, 5, -1), [7, 6])
  assert.end()
})
test('negative range, no output', function (assert) {
  assert.deepEqual(rangeExclusive(7, 5), [])
  assert.end()
})
test('single digit', function (assert) {
  assert.deepEqual(rangeExclusive(10, 10), [])
  assert.end()
})
test('decimal', function (assert) {
  assert.deepEqual(rangeExclusive(0, 1, 0.5), [0, 0.5])
  assert.end()
})
