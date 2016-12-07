import { rankKeys, scanner } from './helpers'

import flow from 'lodash/fp/flow'
import isEmpty from 'lodash/fp/isEmpty'
import isEqual from 'lodash/fp/isEqual'
import map from 'lodash/fp/map'
import reduce from 'lodash/fp/reduce'
import reject from 'lodash/fp/reject'
import split from 'lodash/fp/split'
import take from 'lodash/fp/take'

const takeFirstFiveSortedLettersFromRoom = flow(rankKeys, take(5))
const stringToArray = split('')

export default (input) => {
  return flow(
    split('\n'),
    reject(isEmpty),
    map(scanner),
    reduce((totalCount, room) => {
      const {
        checksum,
        name,
        sectorId
      } = room
      const nameArray = takeFirstFiveSortedLettersFromRoom(name)
      const checksumArray = stringToArray(checksum)
      return isEqual(nameArray, checksumArray) ? (sectorId + totalCount) : totalCount
    }, 0)
  )(input)
}
