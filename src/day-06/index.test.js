import { solvePuzzle } from './'
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
  expect(solvePuzzle(exampleInput)).toBe('easter')
  expect(solvePuzzle(puzzleInput)).toBe('agmwzecr')
})
