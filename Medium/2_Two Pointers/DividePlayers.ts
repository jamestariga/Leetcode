const dividePlayers = (skill: number[]): number => {
  skill.sort((a, b) => a - b)
  let sum = 0

  for (let s of skill) {
    sum += s
  }

  const n = skill.length / 2
  let result = 0
  const target = sum / n
  let left = 0

  for (let right = skill.length - 1; right > left; right--) {
    if (skill[left] + skill[right] === target) {
      result += skill[left] * skill[right]
    } else {
      return -1
    }

    left++
  }

  return result
}

const skill = [3, 2, 5, 1, 3, 4]

console.log(dividePlayers(skill))
