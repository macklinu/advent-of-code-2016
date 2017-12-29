import { createPuzzleSolver } from './'
import puzzleInput from './puzzleInput'

let exampleInput = `eedadn
drvtee
eandsr
raavrd
atevrs
tsrnev
sdttsa
rasrtv
nssdts
ntnada
svetve
tesnvt
vntsnd
vrdear
dvrsen
enarar
`

test('solves part 1', () => {
  let solve = createPuzzleSolver(obj =>
    Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b))
  )
  expect(solve(exampleInput)).toBe('easter')
  expect(solve(puzzleInput)).toBe('agmwzecr')
})

test('solves part 2', () => {
  let solve = createPuzzleSolver(obj =>
    Object.keys(obj).reduce((a, b) => (obj[a] < obj[b] ? a : b))
  )
  expect(solve(exampleInput)).toBe('advent')
  expect(solve(puzzleInput)).toBe('owlaxqvq')
})
