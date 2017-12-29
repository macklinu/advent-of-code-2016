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
  let toWords = input =>
    input |> split('\n') |> filter(Boolean) |> map(arr => arr.split(''))
  let words = toWords(input)

  let wordLength = words |> first |> size

  let joinWords = reduce((all, arr) => all.concat(arr), [])
  let chars = joinWords(words)

  let groupByWordPosition = reduce((acc, val, index) => {
    let rem = index % wordLength
    ;(acc[rem] || (acc[rem] = [])).push(val)
    return acc
  }, {})

  let toCharCount = map(countBy(identity))

  return (
    chars
    |> groupByWordPosition
    |> values
    |> toCharCount
    |> map(charCountHandler)
    |> join('')
  )
}
