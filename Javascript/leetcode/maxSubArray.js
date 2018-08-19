/**
 * Created 2018/08/07 11:46 By lvmingyin
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = nums[0];
  let current = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if(current < 0) current = nums[i];
    else current += nums[i];
    if(current > sum) sum = current;
  }
  return sum;
};

console.log(maxSubArray([-2, -4, -3, -5, -1, -2, -1, -5, 4]));
