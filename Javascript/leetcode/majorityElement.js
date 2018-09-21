/**
 * Created 2018/09/21 08:57 By lvmingyin
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const len = nums.length / 2;

  const map = {};
  let num = 0;
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] || 0;
    map[nums[i]] += 1;
    console.log(map[nums[i]], nums[i]);
    if (map[nums[i]] > len) return nums[i];
  }

  return num;
};

console.log(majorityElement([3, 2, 3]));
