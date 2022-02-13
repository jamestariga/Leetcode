var twoSum = function (nums, target) {
    let number = []

    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                number.push(i, j)

                return number
            }
        }
    }

    return number
}

console.log(twoSum());

// Constraints
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.