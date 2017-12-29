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
  join,
} = require('lodash/fp').convert({ cap: false })

export let createPuzzleSolver = charCountHandler => input => {
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

  return flow(
    groupByWordPosition,
    values,
    toCharCount,
    map(charCountHandler),
    join('')
  )(chars)
}
