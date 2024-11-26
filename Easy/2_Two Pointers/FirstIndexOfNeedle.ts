function strStr(haystack: string, needle: string): number {
  if (needle === '') return 0

  let left = 0
  let count = 0

  for (let right = 0; right < haystack.length; right++) {
    if (haystack[right] === needle[count]) {
      count++
    } else {
      right = left
      left++
      count = 0
    }

    if (count === needle.length) {
      return left
    }
  }

  return -1
}

const haystack = 'sadbutsad'
const needle = 'sad'

console.log(strStr(haystack, needle))
