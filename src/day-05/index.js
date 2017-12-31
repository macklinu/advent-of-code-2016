import md5 from 'md5'

export let partOne = input => {
  let arr = []
  let i = 0
  while (arr.length < 8) {
    let hash = md5(input + i++)
    if (hash.slice(0, 5) === '00000') {
      arr.push(hash[5])
    }
  }
  return arr.join('')
}

export let partTwo = input => {
  let arr = Array(8).fill(undefined)
  let i = 0
  while (arr.some(v => v == null)) {
    let hash = md5(input + i++)
    if (hash.slice(0, 5) === '00000') {
      let position = hash[5]
      let value = hash[6]
      if (position < 8 && arr[position] === undefined) {
        arr[position] = value
      }
    }
  }
  return arr.join('')
}
