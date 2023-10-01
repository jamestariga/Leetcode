/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  sum = 0

  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  for (let i = 0; i < s.length; i++) {
    let curr = s[i]
    let next = s[i + 1]

    roman[curr] < roman[next] ? (sum -= roman[curr]) : (sum += roman[curr])
  }

  return sum
}

console.log(romanToInt('IV'))

// s = MCMXCIV
// Left -> Right
// I -> V
