const canChange = (start: string, target: string): boolean => {
  if (start === target) return true

  let startIndex: number = 0
  let targetIndex: number = 0
  const n: number = start.length

  while (startIndex < n || targetIndex < n) {
    while (startIndex < n && start[startIndex] === '_') {
      startIndex++
    }

    while (targetIndex < n && target[targetIndex] === '_') {
      targetIndex++
    }

    if (startIndex === n || targetIndex === n)
      return startIndex === n && targetIndex === n

    if (
      start[startIndex] !== target[targetIndex] ||
      (start[startIndex] === 'L' && startIndex < targetIndex) ||
      (start[startIndex] === 'R' && startIndex > targetIndex)
    )
      return false

    startIndex++
    targetIndex++
  }

  return true
}

const start = '_L__R__R_'
const target = 'L______RR'

console.log(canChange(start, target))
