/**
 * Created 2018/09/17 08:54 By lvmingyin
 */

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
  const B = [];
  const colLen = A[0].length;
  for (let i = 0; i < colLen; i++) {
    for (let j = 0; j < A.length; j++) {
      B[i] = typeof B[i] === 'undefined' ? [] : B[i];
      B[i][j] = A[j][i];
    }
  }
  return B;
};

console.log(transpose([[1, 2, 3], [4, 5, 6]]));
