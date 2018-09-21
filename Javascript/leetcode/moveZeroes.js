/**
 * Created 2018/09/21 11:51 By lvmingyin
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let max = nums.length;
  for (let i = 0; i < max; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--;
      max--;
    }
  }
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
