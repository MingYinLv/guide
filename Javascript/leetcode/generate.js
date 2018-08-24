/**
 * Created 2018/08/24 14:41 By lvmingyin
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (!numRows) return [];
  const result = [[1]];
  for (let i = 2; i <= numRows; i++) {
    const temp = [];
    const prev = result[i - 2];
    for (let j = 0; j < i; j++) {
      if (j === 0 || j === i - 1) {
        temp.push(1);
      } else {
        temp.push(prev[j - 1] + (prev[j] || 0));
      }
    }
    result.push(temp);
  }
  return result;
};

console.log(generate(5));
