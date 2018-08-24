/**
 * Created 2018/08/20 17:50 By lvmingyin
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 2) return n;
  let one = 1;
  let two = 2;
  let result = 0;
  for (let i = 2; i < n; i++) {
    result = one + two;
    one = two;
    two = result;
  }
  return result;
};

console.log(climbStairs(100));
