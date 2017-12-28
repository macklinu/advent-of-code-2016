import { next, previous, applyDirection, parseInstruction } from './helpers'

const directions = ['N', 'E', 'S', 'W']

describe('next()', () => {
  it('returns next item in array', () => {
    const data = [
      { input: 'N', expected: 'E' },
      { input: 'E', expected: 'S' },
      { input: 'S', expected: 'W' },
      { input: 'W', expected: 'N' }, // wraps around to front of array
    ]
    data.forEach(datum => {
      const { input, expected } = datum
      expect(next(directions)(input)).toEqual(expected)
    })
  })
  it('throws when supplied a value not included in array', () => {
    expect(() => {
      next(directions)(null)
    }).toThrow()
  })
})
describe('previous()', () => {
  it('returns previous item in array', () => {
    const data = [
      { input: 'N', expected: 'W' }, // wraps around to back of array
      { input: 'E', expected: 'N' },
      { input: 'S', expected: 'E' },
      { input: 'W', expected: 'S' },
    ]
    data.forEach(datum => {
      const { input, expected } = datum
      expect(previous(directions)(input)).toEqual(expected)
    })
  })
  it('throws when supplied a value not included in array', () => {
    expect(() => {
      previous(directions)(null)
    }).toThrow()
  })
})
describe('applyDirection()', () => {
  it('adds number of steps in x direction for east', () => {
    expect(applyDirection([0, 0], 'E', 2)).toEqual([2, 0])
  })
  it('subtracts number of steps in x direction for west', () => {
    expect(applyDirection([0, 0], 'W', 2)).toEqual([-2, 0])
  })
  it('adds number of steps in y direction for north', () => {
    expect(applyDirection([2, 0], 'N', 3)).toEqual([2, 3])
  })
  it('subtracts number of steps in y direction for south', () => {
    expect(applyDirection([0, 0], 'S', 2)).toEqual([0, -2])
  })
})
describe('parseInstruction()', () => {
  it('returns a tuple with turn and step number', () => {
    expect(parseInstruction('L1')).toEqual(['L', 1])
  })
  it('parses steps greater than nine', () => {
    expect(parseInstruction('R123')).toEqual(['R', 123])
  })
})
