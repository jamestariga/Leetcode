// const longestSquareStreak = (nums: number[]): number => {
//   const hashSet = new Set(nums)
//   let result: number = 0

//   for (let num of nums) {
//     let currCount = 0

//     while (hashSet.has(num)) {
//       currCount++

//       if (num * num > 10 ** 5) break

//       num *= num
//     }

//     result = Math.max(result, currCount)
//   }

//   return result > 1 ? result : -1
// }

const longestSquareStreak = (nums: number[]): number => {
  const hashMap: { [key: number]: number } = {}

  nums.sort((a, b) => a - b)

  for (const num of nums) {
    const sqr = Math.floor(Math.sqrt(num))

    if (sqr * sqr === num && sqr in hashMap) {
      hashMap[num] = hashMap[sqr] + 1
    } else {
      hashMap[num] = 1
    }
  }

  let result: number = Math.max(...Object.values(hashMap))

  return result > 1 ? result : -1
}

const nums = [4, 3, 6, 16, 8, 2]
console.log(longestSquareStreak(nums))
