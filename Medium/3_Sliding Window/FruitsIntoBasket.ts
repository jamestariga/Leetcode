const totalFruit = (fruits: number[]): number => {
  const hashMap: { [key: number]: number } = {}
  let result: number = 0
  let left: number = 0
  let total: number = 0

  for (let right = 0; right < fruits.length; right++) {
    hashMap[fruits[right]] = (hashMap[fruits[right]] || 0) + 1
    total++

    while (Object.keys(hashMap).length > 2) {
      hashMap[fruits[left]] = (hashMap[fruits[left]] || 0) - 1

      if (hashMap[fruits[left]] === 0) {
        delete hashMap[fruits[left]]
      }

      total--
      left++
    }

    result = Math.max(result, total)
  }

  return result
}

const fruits = [1, 2, 3, 2, 2]

console.log(totalFruit(fruits))
