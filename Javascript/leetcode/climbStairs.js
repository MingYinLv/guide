/**
 * Created 2018/08/20 17:50 By lvmingyin
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 0) return 1;
  else if (n < 0) return 0;
  return climbStairs(n - 1) + climbStairs(n - 2);
};

console.log(climbStairs(20));
