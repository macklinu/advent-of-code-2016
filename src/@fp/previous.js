export function previous (array = []) {
  return function (value) {
    const index = array.indexOf(value)
    if (index === -1) return null
    return array[index - 1] || array[array.length + index - 1]
  }
}
