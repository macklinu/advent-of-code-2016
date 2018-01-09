import createSolver, {
  swapPosition,
  swapLetters,
  rotateDirection,
  reversePositions,
  movePositions,
  rotateBasedOnPosition,
} from './'
import { join, split } from 'lodash/fp'
import puzzleInput from './puzzleInput'

let exampleInput = `swap position 4 with position 0
swap letter d with letter b
reverse positions 0 through 4
rotate left 1 step
move position 1 to position 4
move position 3 to position 0
rotate based on position of letter b
rotate based on position of letter d`

test('solve part 1', () => {
  let exampleSolver = createSolver(exampleInput)
  expect(exampleSolver('abcde')).toBe('decab')

  let puzzleSolver = createSolver(puzzleInput)
  expect(puzzleSolver('abcdefgh')).toBe('aefgbcdh')
})

describe('swapPosition()', () => {
  test('works', () => {
    expect('abcde' |> split('') |> swapPosition(4, 0) |> join('')).toBe('ebcda')
  })
})

describe('swapLetters()', () => {
  test('works', () => {
    expect('ebcda' |> split('') |> swapLetters('d', 'b') |> join('')).toBe(
      'edcba'
    )
  })
})

describe('rotateDirection()', () => {
  test('rotates right', () => {
    expect('abcd' |> split('') |> rotateDirection('right', 1) |> join('')).toBe(
      'dabc'
    )
  })
  test('rotates left', () => {
    expect('abcde' |> split('') |> rotateDirection('left', 1) |> join('')).toBe(
      'bcdea'
    )
  })
})

describe('reversePositions()', () => {
  test('reverses entire string', () => {
    expect('edcba' |> split('') |> reversePositions(0, 4) |> join('')).toBe(
      'abcde'
    )
  })
  test('reverses part of string', () => {
    expect('abcde' |> split('') |> reversePositions(0, 2) |> join('')).toBe(
      'cbade'
    )
  })
})

describe('movePositions()', () => {
  test('works', () => {
    expect('bcdea' |> split('') |> movePositions(1, 4) |> join('')).toBe(
      'bdeac'
    )
    expect('bdeac' |> split('') |> movePositions(3, 0) |> join('')).toBe(
      'abdec'
    )
  })
})

describe('rotateBasedOnPosition()', () => {
  test('works', () => {
    expect('abdec' |> split('') |> rotateBasedOnPosition('b') |> join('')).toBe(
      'ecabd'
    )
    expect('ecabd' |> split('') |> rotateBasedOnPosition('d') |> join('')).toBe(
      'decab'
    )
  })
})
