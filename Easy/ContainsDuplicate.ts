// Solution 1: Brute Force
// const containsDuplicate = (n: number[]) => {
//   const temp: number[] = []

//   for (let i of n) {
//     if (temp.includes(i)) {
//       return true
//     } else {
//       temp.push(i)
//     }
//   }
//   return false
// }

// Big-O = O(n^2)
// Space = O(n)

// Solution 2: Hash Set
const containsDuplicate = (n: number[]) => {
  let set = new Set<number>()

  for (let i of n) {
    if (set.has(i)) return true

    set.add(i)
  }

  return false
}

// Big-O = O(n)
// Space = O(n)

// const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
const nums = [1, 2, 3, 4, 5]

console.log(containsDuplicate(nums))
