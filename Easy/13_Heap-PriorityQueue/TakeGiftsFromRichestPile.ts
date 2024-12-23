import { MaxPriorityQueue } from '@datastructures-js/priority-queue'

// O(k * n * log(n))
// const pickGifts = (gifts: number[], k: number): number => {
//   gifts.sort((a, b) => b - a)

//   for (let i = 0; i < k; i++) {
//     const largest: number = gifts[0]
//     const remaining: number = Math.floor(Math.sqrt(largest))
//     gifts[0] = remaining
//     gifts.sort((a, b) => b - a)
//   }

//   return gifts.reduce((a, b) => a + b, 0)
// }

// O(k + n * log(n))
const pickGifts = (gifts: number[], k: number): number => {
  const maxPQ = new MaxPriorityQueue<number>()

  for (const gift of gifts) {
    maxPQ.enqueue(gift)
  }

  while (k) {
    k--
    const curr = maxPQ.dequeue()
    maxPQ.enqueue(Math.floor(Math.sqrt(curr.element)))
  }

  let result: number = 0

  while (maxPQ.size()) {
    result += maxPQ.dequeue().element
  }

  return result
}

const gifts = [25, 64, 9, 4, 100]
const k = 4
console.log(pickGifts(gifts, k))
