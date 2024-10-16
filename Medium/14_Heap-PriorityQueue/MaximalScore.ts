import { MaxPriorityQueue } from '@datastructures-js/priority-queue'

const maxKelements = (nums: number[], k: number): number => {
  const maxPQ = new MaxPriorityQueue<number>()
  let maxScore: number = 0

  for (const num of nums) {
    maxPQ.enqueue(num)
  }

  while (k > 0) {
    let curr = maxPQ.dequeue()

    maxScore += curr.element

    maxPQ.enqueue(Math.ceil(curr.element / 3))

    k--
  }

  return maxScore
}

const nums = [756902131, 995414896, 95906472, 149914376, 387433380, 848985151],
  k = 6

console.log(maxKelements(nums, k))
