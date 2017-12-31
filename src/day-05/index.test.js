import { partOne, partTwo } from './'

// Tests take a while to run
test.skip('solves part 1', () => {
  expect(partOne('abc')).toBe('18f47a30')
  expect(partOne('ffykfhsq')).toBe('c6697b55')
})

// Tests take a while to run
test.skip('solves part 2', () => {
  expect(partTwo('abc')).toBe('05ace8e3')
  expect(partTwo('ffykfhsq')).toBe('8c35d1ab')
})
