function fillCups(amount: number[]): number {
  let sum = 0
  let cups = 0

  for (let num of amount) {
    sum += num
  }

  while (sum) {
    amount.sort((a, b) => b - a)

    if (amount[0] > 0 && amount[1] > 0) {
      amount[0]--
      amount[1]--
      cups++
    } else if (amount[0] > 0 && amount[1] === 0) {
      amount[0]--
      cups++
    }
    sum--
  }

  return cups
}
