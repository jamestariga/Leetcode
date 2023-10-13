const canPlaceFlowers = (flowerbed: number[], n: number): boolean => {
  flowerbed = [0, ...flowerbed, 0]

  for (let i = 1; i < flowerbed.length - 1; i++) {
    if (
      flowerbed[i - 1] === 0 &&
      flowerbed[i] === 0 &&
      flowerbed[i + 1] === 0
    ) {
      flowerbed[i] = 1
      n -= 1
    }
  }

  return n <= 0
}

const flowerbed = [0, 0, 1]
//@ts-ignore
const n = 1

console.log(canPlaceFlowers(flowerbed, n))
