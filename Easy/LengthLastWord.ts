const lengthOfLastWord = (s: string) => {
  const str = s.trim().split(' ')

  return str[str.length - 1].length
}

const s = '   fly me   to   the moon  '
const t = 'Hello World'
console.log(s.trim())

console.log(lengthOfLastWord(t))
