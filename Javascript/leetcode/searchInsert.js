/**
 * Created 2018/07/29 15:09 By lvmingyin
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  if (nums[0] > target) return 0;
  if (nums[right] < target) return right + 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid] && target > nums[mid - 1]) {
      return mid;
    } else if (target > nums[mid] && target < nums[mid + 1]) {
      return mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};


console.log(searchInsert([1, 3], 2));