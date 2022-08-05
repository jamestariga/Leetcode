const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false
  }

  let str1Obj = {}
  let str2Obj = {}

  for (let i = 0; i < str1.length; i++) {
    str1Obj[str1[i]] = (str1Obj[str1[i]] || 0) + 1
    str2Obj[str2[i]] = (str2Obj[str2[i]] || 0) + 1
  }

  for (let key in str1Obj) {
    if (str1Obj[key] !== str2Obj[key]) {
      return false
    }
  }

  return true
}
