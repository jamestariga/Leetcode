const validAnagram = (str1: string, str2: string) => {
  if (str1.length !== str2.length) return false

  return reorder(str1) === reorder(str2)
}

const reorder = (str: string) => {
  return str
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('')
}

const str1 = 'anagram'
const str2 = 'nagaram'

console.log(validAnagram(str1, str2))

// Big-O = O(nlogn)
