import taxicab from '../'

describe('taxicab()', () => {
  it('travels 5 blocks for instructions `R2, L3`', () => {
    const blocks = taxicab(`R2, L3`)
    expect(blocks).toEqual(5)
  })
  it('travels 2 blocks for instructions `R2, R2, R2`', () => {
    const blocks = taxicab(`R2, R2, R2`)
    expect(blocks).toEqual(2)
  })
  it('travels 12 blocks for instructions `R5, L5, R5, R3`', () => {
    const blocks = taxicab(`R5, L5, R5, R3`)
    expect(blocks).toEqual(12)
  })
  it('travels expected number of blocks for part one input', () => {
    const blocks = taxicab(`R3, L2, L2, R4, L1, R2, R3, R4, L2, R4, L2, L5, L1, R5, R2, R2, L1, R4, R1, L5, L3, R4, R3, R1, L1, L5, L4, L2, R5, L3, L4, R3, R1, L3, R1, L3, R3, L4, R2, R5, L190, R2, L3, R47, R4, L3, R78, L1, R3, R190, R4, L3, R4, R2, R5, R3, R4, R3, L1, L4, R3, L4, R1, L4, L5, R3, L3, L4, R1, R2, L4, L3, R3, R3, L2, L5, R1, L4, L1, R5, L5, R1, R5, L4, R2, L2, R1, L5, L4, R4, R4, R3, R2, R3, L1, R4, R5, L2, L5, L4, L1, R4, L4, R4, L4, R1, R5, L1, R1, L5, R5, R1, R1, L3, L1, R4, L1, L4, L4, L3, R1, R4, R1, R1, R2, L5, L2, R4, L1, R3, L5, L2, R5, L4, R5, L5, R3, R4, L3, L3, L2, R2, L5, L5, R3, R4, R3, R4, R3, R1`)
    expect(blocks).toEqual(262)
  })
})
