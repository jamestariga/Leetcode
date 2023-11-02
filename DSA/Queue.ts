class Queue {
  items: Array<string | number>

  constructor() {
    this.items = []
  }

  enqueue(element: number | string) {
    this.items.push(element)
  }

  dequeue() {
    return this.items.shift()
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0]
    }
    return null
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  print() {
    console.log(this.items.toString())
  }
}
