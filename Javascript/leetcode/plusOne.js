/**
 * Created 2018/08/20 08:57 By lvmingyin
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {

  function plus(nums, arr) {
    const val = nums[nums.length - 1];
    if (val === 9) {
      arr.push(0);
      if (nums.length === 1) {
        nums.unshift(0);
      }
      return plus(nums.slice(0, nums.length - 1), arr);
    }
    nums[nums.length - 1] += 1;
    return nums.concat(arr);
  }

  return plus(digits, []);
};

console.log(plusOne([1, 9, 3, 4, 5]));
