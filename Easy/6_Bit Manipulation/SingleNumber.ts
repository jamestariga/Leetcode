// Solution 1: Using Hash Map
// const singleNumber = (nums: number[]) => {
//   const map = new Map<number, number[]>()
//   let result = 0

//   for (let i = 0; i < nums.length; i++) {
//     if (!map.has(nums[i])) {
//       map.set(nums[i], [])
//     }
//     map.get(nums[i])?.push(i)
//   }

//   for (const [key, value] of map.entries()) {
//     const arrayLength = value.length

//     if (arrayLength === 1) {
//       result = key
//     }
//   }

//   return result
// }

// Big-O = O(n)
// Space = O(n)

// Solution 2: Using Hash Set
const singleNumber = (nums: number[]) => {
  const set = new Set()

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      set.delete(nums[i])
    } else {
      set.add(nums[i])
    }
  }

  for (const x of set.values()) {
    return x
  }
}

// Big-O = O(n)
// Space = O(n)

// Optimal solution: Use bitwise operator

// @ts-ignore
const nums = [2, 2, 1]

console.log(singleNumber(nums))
