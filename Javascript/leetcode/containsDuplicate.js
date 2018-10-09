/**
 * Created 2018/10/09 11:50 By lvmingyin
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return true;
    } else {
      map[nums[i]] = 1;
    }
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8]));


