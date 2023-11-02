// @ts-ignore
class ListNode {
  val: number
  next: ListNode | null

  constructor(val: number, next: ListNode | null = null) {
    this.val = val
    this.next = next
  }
}

class LinkedList {
  head: ListNode
  tail: ListNode

  constructor() {
    this.head = new ListNode(-1)
    this.tail = this.head
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index: number): number {
    let curr = this.head.next
    let i = 0

    while (curr) {
      if (i === index) {
        return curr.val
      }

      i++
      curr = curr.next
    }
    return -1
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertHead(val: number): void {
    const newNode = new ListNode(val)
    newNode.next = this.head.next
    this.head.next = newNode

    if (!newNode.next) {
      // If list is empty before inserting
      this.tail = newNode
    }
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertTail(val: number): void {
    this.tail.next = new ListNode(val)
    this.tail = this.tail.next
  }

  /**
   * @param {number} index
   * @return {boolean}
   */
  remove(index: number): boolean {
    let i = 0
    let curr = this.head

    while (i < index && curr && curr.next) {
      // Move curr to node before target node
      i++
      curr = curr.next
    }

    if (curr && curr.next) {
      if (curr.next === this.tail) {
        this.tail = curr
      }
      curr.next = curr.next.next
      return true
    }

    return false
  }

  /**
   * @return {number[]}
   */
  getValues(): number[] {
    let curr = this.head.next
    let result: number[] = []

    while (curr) {
      result.push(curr.val)
      curr = curr.next
    }

    return result
  }
}

const linkedList = new LinkedList()
console.log(linkedList.getValues())

linkedList.insertHead(1)
linkedList.insertTail(2)
linkedList.insertTail(3)
linkedList.insertTail(4)

console.log(linkedList.getValues())

console.log(linkedList.remove(3))
console.log(linkedList.getValues())
console.log(linkedList.remove(0))
console.log(linkedList.getValues())
console.log(linkedList.get(1))
