import { applyInstruction } from './pinpad'

describe('Pin pad', () => {
  describe('up', () => {
    it('moves to valid place on pin pad', () => {
      // move from "5" to "2"
      expect(applyInstruction([1, 1], 'U')).toEqual([1, 0])
    })
    it('ignores instruction for invalid place on pin pad', () => {
      // cannot move up from "2"
      expect(applyInstruction([0, 0], 'U')).toEqual([0, 0])
    })
  })
  describe('down', () => {
    it('moves to valid place on pin pad', () => {
      // move from "5" to "8"
      expect(applyInstruction([1, 1], 'D')).toEqual([1, 2])
    })
    it('ignores instruction for invalid place on pin pad', () => {
      // cannot down down from "9"
      expect(applyInstruction([2, 2], 'D')).toEqual([2, 2])
    })
  })
  describe('left', () => {
    it('moves to valid place on pin pad', () => {
      // move from "5" to "4"
      expect(applyInstruction([1, 1], 'L')).toEqual([0, 1])
    })
    it('ignores instruction for invalid place on pin pad', () => {
      // cannot move left from "7"
      expect(applyInstruction([0, 2], 'L')).toEqual([0, 2])
    })
  })
  describe('right', () => {
    it('moves to valid place on pin pad', () => {
      // move from "5" to "6"
      expect(applyInstruction([1, 1], 'R')).toEqual([2, 1])
    })
    it('ignores instruction for invalid place on pin pad', () => {
      // cannot move right from "3"
      expect(applyInstruction([2, 0], 'R')).toEqual([2, 0])
    })
  })
})
