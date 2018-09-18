/**
 * Created 2018/09/18 10:05 By lvmingyin
 */

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  if (!nums.length) return nums;
  else if (nums.length * nums[0].length !== r * c) return nums;


  const data = nums.reduce((result, n) => result.concat(n), []);
  const result = [];
  for (let i = 0; i < r; i++) {
    result[i] = result[i] || [];
    for (let j = 0; j < c; j++) {
      result[i].push(data.splice(0, 1)[0]);
    }
  }

  return result;
};

console.log(matrixReshape([[1, 2],
  [3, 4]], 1, 4));
