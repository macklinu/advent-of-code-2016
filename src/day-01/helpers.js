export function next(array = []) {
  return function(value) {
    assertContains(array, value)
    const index = array.indexOf(value)
    return array[index + 1] || array[array.length - index - 1]
  }
}

export function previous(array = []) {
  return function(value) {
    assertContains(array, value)
    const index = array.indexOf(value)
    return array[index - 1] || array[array.length + index - 1]
  }
}

export function applyDirection(coordinates, direction, steps) {
  const [x, y] = coordinates
  switch (direction) {
    case 'N':
      return [x, y + steps]
    case 'S':
      return [x, y - steps]
    case 'E':
      return [x + steps, y]
    case 'W':
      return [x - steps, y]
    default:
      throw Error(`Expected cardinal direction but received '${direction}'`)
  }
}

export function parseInstruction(string) {
  const [turn, ...steps] = string
  return [
    validateTurn(turn), // ensure turn is 'L' or 'R'
    parseInt(steps.join('')), // join remaining strings and parse as number
  ]
}

function validateTurn(turn) {
  if (turn === 'L' || turn === 'R') return turn
  throw Error(`Turn must be 'L' or 'R' but was '${turn}'`)
}

function assertContains(array, value) {
  if (array.includes(value)) return
  throw Error(`Array '${array}' does not contain supplied value: '${value}'`)
}
