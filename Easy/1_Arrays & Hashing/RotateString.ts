const rotateString = (s: string, goal: string): boolean => {
  if (s.length !== goal.length) return false

  const concatenated: string = s + s

  return concatenated.includes(goal)
}

const s = 'defdefdefabcabc'
const t = 'defdefabcabcdef'

console.log(rotateString(s, t))
