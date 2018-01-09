import { split, identity, reduce, join, filter, map } from 'lodash/fp'

export default input => password =>
  input
  |> split('\n')
  |> filter(Boolean)
  |> map(str => {
    let match

    match = str.match(/swap position (\d) with position (\d)/)
    if (match) {
      let [, x, y] = match
      return swapPosition(Number(x), Number(y))
    }

    match = str.match(/swap letter ([a-z]) with letter ([a-z])/)
    if (match) {
      let [, x, y] = match
      return swapLetters(x, y)
    }

    match = str.match(/rotate (left|right) (\d) steps?/)
    if (match) {
      let [, direction, steps] = match
      return rotateDirection(direction, Number(steps))
    }

    match = str.match(/rotate based on position of letter ([a-z])/)
    if (match) {
      let [, letter] = match
      return rotateBasedOnPosition(letter)
    }

    match = str.match(/reverse positions (\d) through (\d)/)
    if (match) {
      let [, x, y] = match
      return reversePositions(Number(x), Number(y))
    }

    match = str.match(/move position (\d) to position (\d)/)
    if (match) {
      let [, x, y] = match
      return movePositions(Number(x), Number(y))
    }

    return identity
  })
  |> reduce((arr, handler) => {
    let result = arr |> handler
    return result
  }, password |> split(''))
  |> join('')

export let swapPosition = (x, y) => arr => {
  let copy = arr.slice()
  let arrX = copy[x]
  let arrY = copy[y]
  copy[x] = arrY
  copy[y] = arrX
  return copy
}

export let swapLetters = (x, y) => arr => {
  let copy = arr.slice()
  let indexOfX = copy.indexOf(x)
  let indexOfY = copy.indexOf(y)
  copy[indexOfX] = y
  copy[indexOfY] = x
  return copy
}

export let rotateDirection = (direction, steps) => arr => {
  let n = steps % arr.length
  if (direction === 'right') {
    return [...arr.slice(arr.length - n), ...arr.slice(0, arr.length - n)]
  } else {
    return [...arr.slice(n), ...arr.slice(0, n)]
  }
}

export let reversePositions = (x, y) => arr => {
  return [
    ...arr.slice(0, x),
    ...arr.slice(x, y + 1).reverse(),
    ...arr.slice(y + 1),
  ]
}

export let movePositions = (x, y) => arr => {
  let copy = arr.slice()
  let valX = copy[x]
  copy.splice(x, 1)
  copy.splice(y, 0, valX)
  return copy
}

export let rotateBasedOnPosition = letter => arr => {
  let copy = arr.slice()
  let index = copy.indexOf(letter)
  return copy |> rotateDirection('right', 1 + index + (index >= 4 ? 1 : 0))
}
