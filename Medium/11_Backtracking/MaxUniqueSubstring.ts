// const maxUniqueSplit = (s: string): number => {
//   const hashSet = new Set<string>()

//   const dfs = (i: number, set: Set<string>) => {
//     let max: number = 0
//     if (i === s.length) return 0

//     for (let j = i; j < s.length; j++) {
//       if (hashSet.has(s[j])) continue
//       const sub = s.substring(i, j + 1)
//       hashSet.add(sub)
//       max = Math.max(max, 1 + dfs(j + 1, set))
//       hashSet.delete(sub)
//     }

//     return max
//   }

//   return dfs(0, hashSet)
// }

const maxUniqueSplit = (s: string): number => {
  const hashSet = new Set<string>()
  let max: number = 1

  const dfs = (str: string) => {
    if (!hashSet.has(str)) {
      hashSet.add(str)
      max = Math.max(max, hashSet.size)
      hashSet.delete(str)
    }

    for (let i = 1; i < str.length; i++) {
      const sub = str.substring(0, i)

      if (hashSet.has(sub)) continue

      hashSet.add(sub)

      dfs(str.substring(i))

      hashSet.delete(sub)
    }
  }

  dfs(s)

  return max
}

const s = 'llkcegedae' // "ababccc"
console.log(maxUniqueSplit(s))
