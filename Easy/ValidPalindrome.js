// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Solution

// const isPalindrome = s => {
//   const sLower = s.toLowerCase().replace(/[^a-z0-9]/g, '');
//   const sReverse = sLower.split('').reverse().join('');
//   return sLower === sReverse;
// }

// Solution 2

const isPalindrome = (s) => {
  const REGEX = /[^a-z0-9]/g

  s = s.toLowerCase().replace(REGEX, '')

  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) return false
  }
  //   for (let i = 0; i < 0; i++) {
  //     for (let j = s.length - 1; i <= j; j--) {
  //       if (s.charAt(i) !== s.charAt(j)) return false
  //     }
  //   }

  return true
}
