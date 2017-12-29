import flow from 'lodash/fp/flow'
import split from 'lodash/fp/split'
import map from 'lodash/fp/map'
import reject from 'lodash/fp/reject'
import isEmpty from 'lodash/fp/isEmpty'
import trim from 'lodash/fp/trim'

import { SquarePinPad, DiamondPinPad } from './pinpad'

let parseInput = input =>
  input
  |> split('\n')  // split at new line
  |> map(trim)  // remove empty spaces
  |> reject(isEmpty)  // remove empty lines
  |> map(split('')) // turn each line into an array of instructions

export default (input, calculatorType) => {
  // start at "5" on the pin pad
  let position =
    calculatorType === 'square'
      ? [1, 1] // center of square pin pad
      : [-2, 0] // left edge of diamond pin pad
  let codes = []

  let pinPad = calculatorType === 'square' ? SquarePinPad : DiamondPinPad

  let instructionSet = parseInput(input)
  instructionSet.forEach(instructions => {
    instructions.forEach(instruction => {
      position = pinPad.applyInstruction(position, instruction)
    })
    let code = pinPad.positionToNumber(position)
    codes.push(code)
  })
  return codes.join('')
}
