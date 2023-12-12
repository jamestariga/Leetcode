const pushDominoes = (dominoes: string): string => {
  let result = dominoes.split('')

  while (true) {
    let temp = result.slice()
    let change = false

    for (let i = 0; i < result.length; i++) {
      let left = i + 1
      let right = i - 1

      if (result[left] === 'L' && result[right] === 'R' && result[i] === '.') {
        continue
      } else if (result[left] === 'L' && result[i] === '.') {
        temp[i] = 'L'
        change = true
      } else if (result[right] === 'R' && result[i] === '.') {
        temp[i] = 'R'
        change = true
      }
    }

    result = temp

    if (!change) break
  }

  return result.join('')
}

const dominoes = '.L.R...LR..L..'

console.log(pushDominoes(dominoes))
