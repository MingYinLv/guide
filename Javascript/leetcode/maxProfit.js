/**
 * Created 2018/08/27 15:57 By lvmingyin
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buy = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];
    if (price < buy) {
      buy = price;
    } else if (price - buy > profit) {
      profit = price - buy;
    }
  }
  return profit;
};

console.log(maxProfit([7,1]));
