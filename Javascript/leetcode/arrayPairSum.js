/**
 * Created 2018/09/17 09:15 By lvmingyin
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {


  nums.sort((a, b) => a - b);

  let result = 0;

  for (let i = 0; i < nums.length; i += 2) {
    result += nums[i];
  }

  return result;
};

console.log(arrayPairSum([1, 4, 3, 2]));
