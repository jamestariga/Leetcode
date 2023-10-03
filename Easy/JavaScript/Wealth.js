const accounts = [
  [1, 5],
  [7, 3],
  [3, 5],
]

/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = (accounts) => {
  let max = 0

  /* Iterating through the array of arrays and adding the values of each array together. */
  for (let i = 0; i < accounts.length; i++) {
    let interval = accounts[i]
    let sum = 0

    for (let j = 0; j < interval.length; j++) {
      sum += interval[j]
    }

    max = Math.max(max, sum)
  }

  return max
}

console.log(maximumWealth(accounts))
