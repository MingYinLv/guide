/**
 * Created 2018/09/10 09:09 By lvmingyin
 */

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  const two = num.toString(2).split('');
  const result = [];
  for (let i = 0; i < two.length; i++) {
    result.push(two[i] === '0' ? 1 : 0);
  }
  return parseInt(result.join(''), 2);
};

console.log(findComplement(5));
