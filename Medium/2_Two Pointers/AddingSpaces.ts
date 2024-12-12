function addSpaces(s: string, spaces: number[]): string {
  let spaceIndex: number = 0
  let stringIndex: number = 0
  const result = new Array(s.length + spaces.length).fill(' ')

  for (let charIndex = 0; charIndex < s.length; charIndex++) {
    if (spaceIndex < spaces.length && charIndex === spaces[spaceIndex]) {
      result[stringIndex++] = ' '
      spaceIndex++
    }

    result[stringIndex++] = s[charIndex]
  }

  return result.slice(0, stringIndex).join('')
}

const s = 'LeetcodeHelpsMeLearn',
  spaces = [8, 13, 15]

console.log(addSpaces(s, spaces))
