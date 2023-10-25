const twoSum = (numbers: number[], target: number): number[] => {
  let hashMap = new Map<number, number>()

  for (let i = 0; i < numbers.length; i++) {
    let diff = target - numbers[i]

    if (hashMap.has(diff)) {
      return [hashMap.get(diff), i + 1]
    } else {
      hashMap.set(numbers[i], i + 1)
    }
  }
}

// @ts-ignore
const numbers = [2, 7, 11, 15]
// @ts-ignore
const target = 9

console.log(twoSum(numbers, target))
