/**
 * Created 2018/07/23 15:39 By lvmingyin
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length <= 1) return nums.length;
  let i = 0;
  while (true) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
    } else {
      i += 1;
    }
    if (i === nums.length - 1) {
      break;
    }
  }
  return nums.length;
};

