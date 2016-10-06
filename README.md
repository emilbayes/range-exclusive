# `range-exclusive` [![Build Status][1]][2]

> Generate a closed range of numbers `[a, b)` with step size `d`

## Installation

```bash
npm install range-exclusive
```

## Usage

```js
var rangeExclusive = require('range-exclusive')

rangeExclusive(10) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
rangeExclusive(3, 9, 3) // [3, 6]
rangeExclusive(7, 5, -1) // [7, 6]

```

## Related

* [`range-inclusive`](https://github.com/emilbayes/range-inclusive)

## License

[ISC](LICENSE)

  [1]: https://travis-ci.org/emilbayes/range-exclusive.svg?branch=master
  [2]: https://travis-ci.org/emilbayes/range-exclusive
