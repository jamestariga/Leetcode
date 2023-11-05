const maxArea = (height: number[]): number => {
  let result: number = Number.MIN_SAFE_INTEGER
  let left: number = 0
  let right: number = height.length - 1

  while (left < right) {
    let area: number = 0

    // The difference between right and left
    let width: number = right - left

    if (height[left] < height[right]) {
      // Calculate the area, then increment left by 1
      area = height[left++] * width
    } else {
      // Calculate the area, then decrement right by 1
      area = height[right--] * width
    }

    result = Math.max(result, area)
  }

  return result
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(maxArea(height))

/* 
Intuition
The idea of the two pointer approach in this problem is that the max water a container can hold is determined by the 
shorter of the two vertical lines. For example, in `height = [1, 8, 6, 2, 5, 4, 8, 3, 7]`, we know that the max width
of the container would be from index 1 to 8. The length between index 1 (left) and index 8 (right) is 7 (8 - 1) since
the right element `7` is less than the left element `8` we can calculate the area by multiplying the lesser element by the
width which gives us `7 * 7 = 49`. By using the two pointer approach, we can narrow down the max width by starting
from the two ends of the array while trying to maximize the height.

Approach

Variable Initialization:
We initialize our two pointers `left = 0` and `right = height.length - 1` as well as the `result` which we will give an initial
value of `Number.MIN_SAFE_INTEGER` in this example but you may initialize it as 0.

Main Loop:
For this approach, we will use a while loop with a base case of `left < right`. We then want to initialize a variable called `area`
at the beginning of the loop since we want this variable to be reassigned to 0 at the start of each iteration. We also want to
initialize a variable called `width` which will be the difference between our right and left pointers in every iteration.
Since we know that the container's max height is determined by the shorter of the two vertical lines we can calculate the area by multiplying
the smallest of the two pointers by the width. If the element on the left is less than the element on the right, we calculate the area
to be `area = height[left] * width` and we increment our left pointer by 1, otherwise we calculate area to be `area = height[right] * width`
and we decrement out right pointer by 1. At the end of each iteration, we want to compare the result and the area to find the max capacity.

Complexity
Time complexity:
The time complexity is O(N), where N is the length of the input array.

Space complexity:
The space complexity is O(1) since we are not using extra space. 
*/
