import md5 from 'md5'

export default input => {
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
