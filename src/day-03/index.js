import add from 'lodash/fp/add'
import chunk from 'lodash/fp/chunk'
import flatten from 'lodash/fp/flatten'
import flow from 'lodash/fp/flow'
import identity from 'lodash/fp/identity'
import isEmpty from 'lodash/fp/isEmpty'
import map from 'lodash/fp/map'
import reduce from 'lodash/fp/reduce'
import reject from 'lodash/fp/reject'
import sortBy from 'lodash/fp/sortBy'
import split from 'lodash/fp/split'
import toNumber from 'lodash/fp/toNumber'
import trim from 'lodash/fp/trim'

// do some crazy lodash fp string parsing
let parseInput = input =>
  input
  |> split('\n')
  |> map(trim)
  |> reject(isEmpty)
  |> map(
    value =>
      value
      |> split(' ')
      |> reject(isEmpty)
      |> trim
      |> split(',')
      |> map(toNumber)
  )

let sortAscending = sortBy(identity)

export default (input, parseDirection) => {
  let values = parseInput(input)
  let instructions
  if (parseDirection === 'vertical') {
    // chunk columns into groups of 3
    // and flatten into one array of the new instructions
    let firstColumn = []
    let secondColumn = []
    let thirdColumn = []
    flatten(values).forEach((value, index) => {
      if (index % 3 === 0) firstColumn.push(value)
      else if (index % 3 === 1) secondColumn.push(value)
      else thirdColumn.push(value)
    })
    instructions =
      [firstColumn, secondColumn, thirdColumn] |> map(chunk(3)) |> flatten
  } else {
    // no need to do additional parsing
    instructions = values
  }
  return (
    instructions
    |> reduce((prev, curr) => {
      let [lo, mid, hi] = sortAscending(curr)
      return Number(add(lo, mid) > hi) + prev
    }, 0)
  )
}
