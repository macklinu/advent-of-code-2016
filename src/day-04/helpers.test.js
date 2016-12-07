import { rankKeys, scanner } from './helpers'

describe('scanner()', () => {
  it('parses decrypted string into usable parts', () => {
    expect(scanner('aaaaa-bbb-z-y-x-123[abxyz]')).toEqual({
      name: 'aaaaabbbzyx',
      sectorId: 123,
      checksum: 'abxyz'
    })
    expect(scanner('sgmtkzoi-pkrrehkgt-rumoyzoiy-436[korgi]')).toEqual({
      name: 'sgmtkzoipkrrehkgtrumoyzoiy',
      sectorId: 436,
      checksum: 'korgi'
    })
  })
})
describe('rankKeys()', () => {
  it('sorts room name letters by count and then alphabetically if there is a tie', () => {
    expect(rankKeys('aaaaabbbzyx'))
      .toEqual(['a', 'b', 'x', 'y', 'z'])
  })
})
