import fs from 'fs'
import path from 'path'
import sumOfSectorIds from './'

test('it treats `aaaaa-bbb-z-y-x-123[abxyz]` as a valid room', () => {
  expect(sumOfSectorIds(`aaaaa-bbb-z-y-x-123[abxyz]`)).toEqual(123)
})
test('it treats `a-b-c-d-e-f-g-h-987[abcde]` as a valid room', () => {
  expect(sumOfSectorIds(`a-b-c-d-e-f-g-h-987[abcde]`)).toEqual(987)
})
test('it treats `not-a-real-room-404[oarel]` as a valid room', () => {
  expect(sumOfSectorIds(`not-a-real-room-404[oarel]`)).toEqual(404)
})
test('it treats `totally-real-room-200[decoy]` as an invalid room', () => {
  expect(sumOfSectorIds(`totally-real-room-200[decoy]`)).toEqual(0)
})
test('it solves the day 4 part 1 puzzle', () => {
  const input = fs.readFileSync(path.join(__dirname, './input.txt'), { encoding: 'utf8' })
  expect(sumOfSectorIds(input)).toEqual(173787)
})
