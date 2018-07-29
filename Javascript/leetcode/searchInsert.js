/**
 * Created 2018/07/29 15:09 By lvmingyin
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const len = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return len;
};


console.log(searchInsert([1, 3], 2));