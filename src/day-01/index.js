import flow from 'lodash/fp/flow'
import map from 'lodash/fp/map'
import reduce from 'lodash/fp/reduce'
import split from 'lodash/fp/split'
import sum from 'lodash/fp/sum'

import { next, previous, applyDirection, parseInstruction } from './helpers'

const cardinalDirections = ['N', 'E', 'S', 'W']

const turnRight = next(cardinalDirections)
const turnLeft = previous(cardinalDirections)

const initialState = { coordinates: [0, 0], direction: 'N' }
const handleInstruction = (result, value) => {
  const { coordinates, direction } = result
  const [turn, steps] = parseInstruction(value)
  const cardinalDirection = (turn === 'R' ? turnRight : turnLeft)(direction)
  return {
    coordinates: applyDirection(coordinates, cardinalDirection, steps),
    direction: cardinalDirection,
  }
}
const handleInstructions = reduce(handleInstruction, initialState)

export default input => {
  const instructions = split(', ')(input)
  const { coordinates } = handleInstructions(instructions)
  return flow(map(Math.abs), sum)(coordinates)
}
