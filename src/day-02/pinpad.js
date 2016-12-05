import cond from 'lodash/fp/cond'
import constant from 'lodash/fp/constant'
import isEqual from 'lodash/fp/isEqual'
import isNil from 'lodash/fp/isNil'

export function applyInstruction (position, instruction) {
  const [x, y] = position
  switch (instruction) {
    case 'U': return [x, Math.max(y - 1, 0)]
    case 'D': return [x, Math.min(y + 1, 2)]
    case 'L': return [Math.max(x - 1, 0), y]
    case 'R': return [Math.min(x + 1, 2), y]
    default: throw Error(`Invalid instruction character: ${instruction}`)
  }
}

export function positionToNumber (position) {
  const number = cond([
    [isEqual([0, 0]), constant('1')],
    [isEqual([1, 0]), constant('2')],
    [isEqual([2, 0]), constant('3')],
    [isEqual([0, 1]), constant('4')],
    [isEqual([1, 1]), constant('5')],
    [isEqual([2, 1]), constant('6')],
    [isEqual([0, 2]), constant('7')],
    [isEqual([1, 2]), constant('8')],
    [isEqual([2, 2]), constant('9')]
  ])(position)
  if (isNil(number)) throw Error(`Missing position to number map for: ${position}`)
  return number
}
