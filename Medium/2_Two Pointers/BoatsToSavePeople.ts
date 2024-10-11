const numRescueBoats = (people: number[], limit: number): number => {
  people.sort((a, b) => a - b)

  let left: number = 0
  let right: number = people.length - 1
  let boats: number = 0

  while (left <= right) {
    let remainder = limit - people[right]

    right--
    boats++

    if (left <= right && remainder >= people[right]) {
      left++
    }
  }

  return boats
}

const people = [3, 2, 2, 1]
const limit = 3
console.log(numRescueBoats(people, limit))
