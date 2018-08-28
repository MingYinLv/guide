/**
 * Created 2018/08/28 11:15 By lvmingyin
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let num = nums[0];
  for (let i = 1; i < nums.length; i++) {
    num = num ^ nums[i];
  }
  return num;
};

console.log(singleNumber([1, 5, 2, 3, 3, 2, 1, 6, 8, 8, 6]));
