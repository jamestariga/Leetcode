function findTheDifference(s: string, t: string): string {
  const hashMap = {}

  for (let str of s) {
    hashMap[str] = hashMap[str] + 1 || 1
  }

  for (let str of t) {
    if (!hashMap[str]) return str

    hashMap[str]--
  }
}

const s = 'abcd'
const t = 'abcde'

console.log(findTheDifference(s, t))
