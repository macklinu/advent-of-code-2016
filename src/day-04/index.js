import flow from 'lodash/fp/flow'
import isEmpty from 'lodash/fp/isEmpty'
import join from 'lodash/fp/join'
import map from 'lodash/fp/map'
import reduce from 'lodash/fp/reduce'
import reject from 'lodash/fp/reject'
import replace from 'lodash/fp/replace'
import split from 'lodash/fp/split'
import take from 'lodash/fp/take'

import { rankKeys, scanner } from './helpers'

let takeFirstFiveSortedLettersFromRoom = name =>
  name |> replace(/-/g, '') |> rankKeys |> take(5) |> join('')

export default input =>
  input
  |> split('\n')
  |> reject(isEmpty)
  |> map(scanner)
  |> reduce((totalCount, { checksum, name, sectorId }) => {
    return takeFirstFiveSortedLettersFromRoom(name) === checksum
      ? sectorId + totalCount
      : totalCount
  }, 0)
