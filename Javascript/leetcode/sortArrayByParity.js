/**
 * Created 2018/09/18 09:56 By lvmingyin
 */

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  const B = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      B.unshift(A[i]);
    } else {
      B.push(A[i]);
    }
  }
  return B;
};

console.log(sortArrayByParity([3, 1, 2, 4]));
