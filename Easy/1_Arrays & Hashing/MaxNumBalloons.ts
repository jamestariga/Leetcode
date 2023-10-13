type Hash = {
  b: number
  a: number
  n: number
  l: number
  o: number
}

const maxNumberOfBalloons = (text: string): number => {
  let min = text.length

  let hash: Hash = {
    b: 0,
    a: 0,
    n: 0,
    l: 0,
    o: 0,
  }

  for (let i of text) {
    const char = i
    if (char in hash) {
      hash[char]++
    }
  }

  for (let letter in hash) {
    let count = hash[letter]

    if (letter === 'l' || letter === 'o') {
      count = Math.floor(count / 2)
    }

    if (count < min) {
      min = count
    }
  }

  return min
}

const text =
  'bbaallllllllllllllllllllllllllllllllloooooooooooooooooooooooooooooooooooooooooooooooooon'

console.log(maxNumberOfBalloons(text))

// Approach
// First create a object with all the letters in the word balloon.
// hash = {
// 'b' : 0,
// 'a' : 0,
// 'n' : 0,
// 'l' : 0,
// 'o' : 0
// }.

// Initialize Variables:

// min: Initialize a variable min to text.length. This will be the initial assumed maximum, as we aim to minimize the count of characters needed.

// hash: Initialize a hash table to store character counts. Keys are characters ('b', 'a', 'n', 'l', 'o').

// Count Characters:
// Iterate through each character in text.
// If the character is a valid key in hash, increment the corresponding count.
// Adjust Counts for 'l' and 'o':

// Iterate through each key in hash.
// For keys 'l' and 'o', divide the count by 2 (as the word "balloon" requires two of each).
// Update Minimum Count:

// For each key, compare the count with the current assumed maximum (min).
// Update min to the new count if it is smaller.
// Return Result:

// After processing all characters, return the final value of min.

// Complexity
// Time complexity: O(n)
// The algorithm iterates through each character in text once, leading to a time complexity of O(N), where N is the length of the input string.
// Space complexity: O(n)
// The algorithm uses a fixed-size hash table (hash) to store character counts, resulting in a constant space complexity O(1).
