let solution = function (isBadVersion: any) {
  return (n: number): number => {
    let start = 0
    let end = n

    while (start <= end) {
      let mid = start + Math.floor((end - start) / 2)

      let midBadVersion = isBadVersion(mid)

      if (midBadVersion) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    }

    return start
  }
}
