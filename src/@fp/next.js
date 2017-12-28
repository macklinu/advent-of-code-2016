export default function next (array = []) {
  return function (value, position = 1) {
    const index = array.indexOf(value)
    console.log({ index })
    if (index === -1) return null
    return array[index + position] || array[array.length - index + position]
  }
}
