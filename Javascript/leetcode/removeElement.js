/**
 * Created 2018/07/23 15:49 By lvmingyin
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  if (nums.length === 0) return 0;

  let i = 0;
  while (true) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    } else {
      i += 1;
    }
    if (i === nums.length) {
      break;
    }
  }
  return nums.length;
};

