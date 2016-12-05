import flow from 'lodash/fp/flow'
import split from 'lodash/fp/split'
import map from 'lodash/fp/map'
import reject from 'lodash/fp/reject'
import isEmpty from 'lodash/fp/isEmpty'
import trim from 'lodash/fp/trim'

import { applyInstruction, positionToNumber } from './pinpad'

const parseInput = flow(
  split('\n'), // split at new line
  map(trim), // remove empty spaces
  reject(isEmpty), // remove empty lines
  map(split('')) // turn each line into an array of instructions
)

export default (input) => {
  // state
  let position = [1, 1] // start at center of square pin pad
  let codes = []

  const instructionSet = parseInput(input)
  for (const instructions of instructionSet) {
    for (const instruction of instructions) {
      position = applyInstruction(position, instruction)
    }
    const code = positionToNumber(position)
    codes.push(code)
  }
  return codes.join('')
}
