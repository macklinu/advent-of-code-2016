import flow from 'lodash/fp/flow'
import map from 'lodash/fp/map'
import reduce from 'lodash/fp/reduce'
import split from 'lodash/fp/split'
import sum from 'lodash/fp/sum'

import { next, previous, applyDirection, parseInstruction } from './helpers'

let cardinalDirections = ['N', 'E', 'S', 'W']

let turnRight = next(cardinalDirections)
let turnLeft = previous(cardinalDirections)

let handleInstructions = reduce(
  ({ coordinates, direction }, value) => {
    let [turn, steps] = parseInstruction(value)
    let cardinalDirection = direction |> (turn === 'R' ? turnRight : turnLeft)
    return {
      coordinates: applyDirection(coordinates, cardinalDirection, steps),
      direction: cardinalDirection,
    }
  },
  {
    coordinates: [0, 0],
    direction: 'N',
  }
)

export default input => {
  let instructions = split(', ')(input)
  let { coordinates } = handleInstructions(instructions)
  return coordinates |> map(Math.abs) |> sum
}
