const smallestChair = (times: number[][], targetFriend: number): number => {
  // A sorted list of the interval, preserving the original index of the "friend"
  const sortedTimes = times
    .map((interval, index) => ({
      arrival: interval[0],
      leave: interval[1],
      friend: index,
    }))
    .sort((a, b) => a.arrival - b.arrival)

  // Available chairs where availableChairs[i] represents the time of departure
  const availableChairs = new Array(times.length).fill(-1)

  for (const time of sortedTimes) {
    const { arrival, leave, friend } = time

    let chair: number = 0

    // Look for the first available chair
    for (let i = 0; i < availableChairs.length; i++) {
      if (arrival >= availableChairs[i]) {
        chair = i
        break
      }
    }

    availableChairs[chair] = leave

    if (friend === targetFriend) {
      return chair
    }
  }

  return -1
}

const times = [
    [3, 10],
    [1, 5],
    [4, 6],
    [2, 7],
  ],
  targetFriend = 3

console.log(smallestChair(times, targetFriend))
