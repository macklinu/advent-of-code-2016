import executeProgram from './'
import puzzleInput from './puzzleInput'
import { get } from 'lodash/fp'

let exampleInput = `cpy 41 a
inc a
inc a
dec a
jnz a 2
dec a`

test('solves part 1', () => {
  let registerA = input => input |> executeProgram() |> get('a')
  expect(registerA(exampleInput)).toBe(42)
  expect(registerA(puzzleInput)).toBe(318009)
})

test('solves part 2', () => {
  let registerA = input => input |> executeProgram({ c: 1 }) |> get('a')
  expect(registerA(puzzleInput)).toBe(9227663)
})
