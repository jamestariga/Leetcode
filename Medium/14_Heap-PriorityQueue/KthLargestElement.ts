import { MaxPriorityQueue } from '@datastructures-js/priority-queue'

const findKthLargest = (nums: number[], k: number): number => {
  const maxPQ = new MaxPriorityQueue<number>()

  for (let num of nums) {
    maxPQ.enqueue(num)
  }

  while (k > 1) {
    maxPQ.dequeue()

    k--
  }

  return maxPQ.front().element
}

const nums = [3, 2, 1, 5, 6, 4],
  k = 2

console.log(findKthLargest(nums, k))
