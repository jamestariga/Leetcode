const minGroups = (intervals: number[][]): number => {
  let groups: number = 0

  // Pointers for start and end times
  let left: number = 0
  let right: number = 0

  // Arrays to store separate start and end times of all intervals
  let startEl: number[] = []
  let endEl: number[] = []

  // Iterate through each interval and populate the startEl and endEl arrays
  for (const [start, end] of intervals) {
    startEl.push(start)
    endEl.push(end)
  }

  // Sort the times in ascending order
  startEl.sort((a, b) => a - b)
  endEl.sort((a, b) => a - b)

  while (left < intervals.length) {
    if (startEl[left] <= endEl[right]) {
      left++
    } else {
      right++
    }

    // (left - right + 1) represents the number of ongoing intervals at this point
    groups = Math.max(groups, left - right)
  }

  return groups
}

const intervals = [
  [5, 10],
  [6, 8],
  [1, 5],
  [2, 3],
  [1, 10],
]

console.log(minGroups(intervals))
