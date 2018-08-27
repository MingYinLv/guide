/**
 * Created 2018/08/27 17:47 By lvmingyin
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length <= 1) return 0;
  let sum = 0; // 初始值是 0
  for (let i = 0; i < prices.length - 1; i++) {
    sum += (prices[i + 1] - prices[i] > 0) ? prices[i + 1] - prices[i] : 0;
  }
  return sum;
};

console.log(maxProfit([1, 2, 0, 4]));
