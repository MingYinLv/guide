/**
 * Created 2018/08/07 11:46 By lvmingyin
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum > max) {

        max = sum;
      }
    }
  }
  return max;
};

console.log(maxSubArray([-2]));
