// @ts-ignore
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

const deleteDuplicates = (head: ListNode | null): ListNode | null => {
  let node = head

  while (node !== null) {
    if (node.next !== null) {
      if (node.val === node.next.val) {
        node.next = node.next.next
      }
    }

    node = node.next
  }

  return head
}

// @ts-ignore
const list = new ListNode(1, new ListNode(1, new ListNode(2)))

console.log(deleteDuplicates(list))
