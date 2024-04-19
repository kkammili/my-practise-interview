/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    let lastNonZeroFoundAt = 0;  // Tracks the last non-zero index found.

    // Iterate over the array to find non-zero elements.
    for (let current = 0; current < nums.length; current++) {
        if (nums[current] !== 0) {
            // Swap the current element with the element at lastNonZeroFoundAt.
            var temp = nums[lastNonZeroFoundAt];  // Store the value at lastNonZeroFoundAt in a temporary variable
            nums[lastNonZeroFoundAt] = nums[current];  // Move the non-zero element to the position of the last non-zero found
            nums[current] = temp;  // Move the original value at lastNonZeroFoundAt (typically a zero) to the current position

            // Move the lastNonZeroFoundAt index forward.
            lastNonZeroFoundAt++;
        }
    }
    console.log(nums)
}

moveZeroes([0, 1, 0, 3, 12])