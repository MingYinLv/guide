/**
 * Created 2018/08/27 14:13 By lvmingyin
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const result = [];
  for (let i = 0; i <= rowIndex; i++) {
    const temp = [];
    const prev = result[i - 1];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        temp.push(1);
      } else {
        temp.push(prev[j - 1] + (prev[j] || 0));
      }
    }
    result.push(temp);
  }
  return result[result.length - 1];
};

console.log(getRow(3));
