class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

const reorderList = (head: ListNode | null): void => {
  let slow = head
  let fast = head.next

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  let second = slow.next
  slow.next = null
  let prev = null

  while (second) {
    let curr = second.next
    second.next = prev
    prev = second
    second = curr
  }

  let left = head
  let right = prev

  while (right) {
    const tempLeft = left.next
    const tempRight = right.next

    left.next = right
    right.next = tempLeft

    left = tempLeft
    right = tempRight
  }
}

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))

console.log(reorderList(head))
