const licenseKeyFormatting = (s: string, k: number): string => {
  let currIndex: number = s.length - 1
  let result: string = ''
  let currSize: number = 0

  for (let i = currIndex; i >= 0; i--) {
    if (s[i] !== '-') {
      if (k <= currSize) {
        result += '-'
        currSize = 0
      }

      currSize++
      result += s[i].toUpperCase()
    }
  }

  return result.split('').reverse().join('')
}

const s = '5F3Z-2e-9-w'
const k = 4
console.log(licenseKeyFormatting(s, k))
