let {
  flow,
  map,
  countBy,
  split,
  filter,
  identity,
  reduce,
  values,
  first,
  size,
  keys,
  join,
} = require('lodash/fp').convert({ cap: false })

export function solvePuzzle(input) {
  let toWords = flow(split('\n'), filter(Boolean), map(arr => arr.split('')))
  let words = toWords(input)

  let wordLength = size(first(words))

  let joinWords = reduce((all, arr) => all.concat(arr), [])
  let chars = joinWords(words)

  let groupByWordPosition = reduce((acc, val, index) => {
    let rem = index % wordLength
    ;(acc[rem] || (acc[rem] = [])).push(val)
    return acc
  }, {})

  let toCharCount = map(countBy(identity))

  let maxValue = obj => keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b))

  return flow(
    groupByWordPosition,
    values,
    toCharCount,
    map(maxValue),
    join('')
  )(chars)
}
