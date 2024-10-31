// function removeSubfolders(folder: string[]): string[] {
//   folder.sort((a, b) => a.localeCompare(b))
//   const hashSet = new Set<string>()

//   let currStr = ''

//   for (let s of folder) {
//     for (let i = 0; i < s.length; i++) {
//       currStr += s[i]

//       if (hashSet.has(currStr) && s[i + 1] === '/') {
//         currStr = ''
//         break
//       }
//     }
//     if (!hashSet.has(currStr) && currStr !== '') {
//       hashSet.add(currStr)
//       currStr = ''
//     }
//   }

//   return [...hashSet]
// }

const removeSubfolders = (folder: string[]): string[] => {
  const hashSet = new Set<string>(folder)
  const result: string[] = []

  for (let sub of folder) {
    result.push(sub)

    for (let i = 0; i < sub.length; i++) {
      if (sub[i] === '/' && hashSet.has(sub.slice(0, i))) {
        result.pop()
        break
      }
    }
  }

  return result
}

const folder = ['/a', '/a/b', '/c/d', '/c/d/e', '/c/f']
console.log(removeSubfolders(folder))
