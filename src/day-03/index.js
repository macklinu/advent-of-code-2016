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
const parseInput = flow(
  split('\n'),
  map(trim),
  reject(isEmpty),
  map(value =>
    flow(split(' '), reject(isEmpty), trim, split(','), map(toNumber))(value)
  )
)

const sortAscending = sortBy(identity)

export default (input, parseDirection) => {
  const values = parseInput(input)
  let instructions
  if (parseDirection === 'vertical') {
    // chunk columns into groups of 3
    // and flatten into one array of the new instructions
    const firstColumn = []
    const secondColumn = []
    const thirdColumn = []
    flatten(values).forEach((value, index) => {
      if (index % 3 === 0) firstColumn.push(value)
      else if (index % 3 === 1) secondColumn.push(value)
      else thirdColumn.push(value)
    })
    instructions = flow(map(chunk(3)), flatten)([
      firstColumn,
      secondColumn,
      thirdColumn,
    ])
  } else {
    // no need to do additional parsing
    instructions = values
  }
  return reduce((prev, curr) => {
    const [lo, mid, hi] = sortAscending(curr)
    return Number(add(lo, mid) > hi) + prev
  }, 0)(instructions)
}
