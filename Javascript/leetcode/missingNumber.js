/**
 * Created 2018/10/09 11:32 By lvmingyin
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const len = nums.length;
  const total = nums.reduce((total, n) => total + n, 0);
  const max = len * ((len + 1) / 2);
  return max - total;
};


console.log(missingNumber([9,6,4,2,3,5,7,0,1]));
