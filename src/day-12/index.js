import { split, filter, map } from 'lodash/fp'

export default (registerOverride = {}) => input => {
  let toValue = x => register => (Number.isNaN(+x) ? register[x] || 0 : +x)
  let instructionToFn = {
    cpy: (x, y) => register => (register[y] = toValue(x)(register)),
    inc: x => register => (register[x] += 1),
    dec: x => register => (register[x] -= 1),
    jnz: (x, y) => register => ((toValue(x)(register) || 0) === 0 ? 1 : +y),
  }

  let instructions = input |> split('\n') |> filter(Boolean) |> map(split(' '))
  let index = 0
  let registers = { a: 0, b: 0, c: 0, d: 0, ...registerOverride }

  while (index < instructions.length) {
    let [i, ...args] = instructions[index]
    let update = instructionToFn[i].apply(null, args)
    let result = update(registers)
    index += i === 'jnz' ? result : 1
  }

  return registers
}
