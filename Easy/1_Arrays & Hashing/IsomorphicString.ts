const isIsomorphic = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false

  let mapS = new Map()
  let mapT = new Map()

  for (let i = 0; i < s.length; i++) {
    if (
      (mapS.has(s[i]) && mapS.get(s[i]) !== t[i]) ||
      (mapT.has(t[i]) && mapT.get(t[i]) !== s[i])
    )
      return false

    mapS.set(s[i], t[i])
    mapT.set(t[i], s[i])

    console.log(mapS.get(s[i]))
    console.log(t[i])
  }

  return true
}

// @ts-ignore
const s = 'egg'

// @ts-ignore
const t = 'add'

console.log(isIsomorphic(s, t))
