import flow from 'lodash/fp/flow'
import isEmpty from 'lodash/fp/isEmpty'
import map from 'lodash/fp/map'
import next from '../@fp/next'
import reject from 'lodash/fp/reject'
import split from 'lodash/fp/split'

import { scanner } from './helpers'

const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

const nextInAlphabet = next(alphabet)

export default input => {
  const parsedRooms = flow(split('\n'), reject(isEmpty), map(scanner))(input)
  return map(roomObject => {
    console.log({ roomObject })
    const { name, sectorId } = roomObject
    const remainder = sectorId % alphabet.length
    console.log({ name, remainder })
    const chars = split('')(name)
    return map(c => (c === '-' ? ' ' : nextInAlphabet(c, remainder)))(chars)
  })(parsedRooms)
}
