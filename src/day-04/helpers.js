import countBy from 'lodash/fp/countBy'
import first from 'lodash/fp/first'
import flow from 'lodash/fp/flow'
import identity from 'lodash/fp/identity'
import map from 'lodash/fp/map'
import toNumber from 'lodash/fp/toNumber'
import toPairs from 'lodash/fp/toPairs'

const regex = /(.+?)([0-9]{3})\[?([a-z]{5})?]?/i

const countLetters = countBy(identity)
const mapToLetter = map(first)

export function scanner(input) {
  const result = regex.exec(input)
  if (result === null) throw Error(`Could not match room regex: ${input}`)
  const [_, name, sectorId, checksum] = result // eslint-disable-line
  return {
    name,
    sectorId: toNumber(sectorId),
    checksum,
  }
}

export function rankKeys(roomName) {
  return flow(
    countLetters,
    toPairs,
    sortNumericallyAndAlphabetically,
    mapToLetter
  )(roomName)
}

const sortNumericallyAndAlphabetically = array => {
  return array.sort((a, b) => {
    return a[1] > b[1]
      ? -1
      : a[1] < b[1]
        ? 1 // sort by highest to lowest
        : a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0 // sort from a-z if multiple digits have the same value
  })
}
