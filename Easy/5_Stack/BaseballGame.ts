const calPoints = (operations: string[]) => {
  let stack: number[] = []

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === 'C') {
      stack.pop()
    } else if (operations[i] === 'D') {
      stack.push(stack[stack.length - 1] * 2)
    } else if (operations[i] === '+') {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2])
    } else if (typeof Number(operations[i])) {
      stack.push(parseInt(operations[i]))
    }
  }

  return stack.reduce((left, right) => left + right, 0)
}

const ops = ['5', '2', 'C', 'D', '+']

console.log(calPoints(ops))
