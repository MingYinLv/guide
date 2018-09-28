/**
 * Created 2018/09/28 14:08 By lvmingyin
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let tmp = 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === 1) {
      tmp += 1;
    } else {
      tmp = 0;
    }

    if (tmp > max) {
      max = tmp;
    }
  }
  return max;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
