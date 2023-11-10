class MinHeap {
  heap: Array<number> = new Array<number>()

  constructor(heap: number[]) {
    this.heap
  }

  push(val: number): void {
    this.heap.push(val)
    let i = this.heap.length - 1

    while (i > 1 && this.heap[i] < this.heap[Math.floor(i / 2)]) {
      let temp = this.heap[i]
      this.heap[i] = this.heap[Math.floor(i / 2)]
      this.heap[Math.floor(i / 2)] = temp
      i = Math.floor(i / 2)
    }
  }

  pop(): number {
    if (this.heap.length === 1) {
      return null
    }

    if (this.heap.length === 2) {
      return this.heap.pop()
    }

    let result = this.heap[1]
    this.heap[1] = this.heap.pop()
    let i = 1

    while (2 * i < this.heap.length) {
      let left = 2 * i
      let right = 2 * i + 1
      if (
        right < this.heap.length &&
        this.heap[right] < this.heap[left] &&
        this.heap[i] > this.heap[right]
      ) {
        // Swap right
        let temp = this.heap[i]
        this.heap[i] = this.heap[right]
        this.heap[right] = temp
        i = right
      } else if (this.heap[i] > this.heap[left]) {
        // Swap left
        let temp = this.heap[i]
        this.heap[i] = this.heap[left]
        this.heap[left] = temp
        i = left
      } else {
        break
      }
    }

    return result
  }

  heapify(arr: number[]) {
    arr.push(arr[0])

    this.heap = arr
    let curr = Math.floor(this.heap.length / 2)

    while (curr > 0) {
      let i = curr
      while (2 * i < this.heap.length) {
        let left = 2 * i
        let right = 2 * i + 1
        if (
          right < this.heap.length &&
          this.heap[right] < this.heap[left] &&
          this.heap[i] > this.heap[right]
        ) {
          // Swap right
          let temp = this.heap[i]
          this.heap[i] = this.heap[right]
          this.heap[right] = temp
          i = right
        } else if (this.heap[i] > this.heap[left]) {
          // Swap left
          let temp = this.heap[i]
          this.heap[i] = this.heap[left]
          this.heap[left] = temp
          i = left
        } else {
          break
        }
      }
      curr--
    }

    return
  }
}
