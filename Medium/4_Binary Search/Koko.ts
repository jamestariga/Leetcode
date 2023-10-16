const minEatingSpeed = (piles: number[], h: number): number => {
  let min = 1
  let max = Math.max(...piles)
  let k: number
  let result = max

  if (piles.length === h) return max

  while (min <= max) {
    k = min + Math.floor((max - min) / 2)
    let hours = 0

    for (let i = 0; i < piles.length; i++) {
      hours += Math.ceil(piles[i] / k)
    }

    if (hours <= h) {
      result = Math.min(result, k)
      max = k - 1
    } else {
      min = k + 1
    }
  }

  return result
}

const piles = [30, 11, 23, 4, 20]
const h = 6

console.log(minEatingSpeed(piles, h))
