import { rankKeys, scanner } from './helpers'

import flow from 'lodash/fp/flow'
import isEmpty from 'lodash/fp/isEmpty'
import join from 'lodash/fp/join'
import map from 'lodash/fp/map'
import reduce from 'lodash/fp/reduce'
import reject from 'lodash/fp/reject'
import split from 'lodash/fp/split'
import take from 'lodash/fp/take'

const takeFirstFiveSortedLettersFromRoom = flow(rankKeys, take(5), join(''))

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
      const fiveRoomLetters = takeFirstFiveSortedLettersFromRoom(name)
      return fiveRoomLetters === checksum ? (sectorId + totalCount) : totalCount
    }, 0)
  )(input)
}
