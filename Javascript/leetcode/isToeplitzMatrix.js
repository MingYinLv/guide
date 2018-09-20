/**
 * Created 2018/09/19 08:47 By lvmingyin
 */

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  if (!matrix.length) return true;
  const r = matrix.length;
  const c = matrix[0].length;

  function isColumn(pois) {
    const [tmpR, tmpC] = pois;
    const rLen = matrix.length - tmpR;
    const cLen = matrix[0].length - tmpC;
    const min = rLen > cLen ? cLen : rLen;
    const val = matrix[tmpR][tmpC];
    for (let i = 1; i < min; i++) {
      if (val !== matrix[tmpR + i][tmpC + i]) return false;
    }
    return true;
  }

  const max = r + c - 1;
  for (let i = 0; i < max; i++) {
    let x = i;
    let y = 0;

    if (i >= r) {
      x = 0;
      y = i - r + 1;
    }
    if (!isColumn([x, y])) {
      return false;
    }
  }

  return true;
};

console.log(isToeplitzMatrix([[19, 80, 23, 69, 95, 63, 94, 61, 78, 56, 39, 91, 26, 44, 41, 9, 18, 64], [55, 19, 80, 23, 69, 95, 63, 94, 61, 78, 56, 39, 91, 26, 44, 41, 9, 18], [18, 55, 19, 80, 23, 69, 95, 63, 94, 61, 78, 56, 39, 91, 26, 44, 41, 9], [10, 18, 55, 19, 80, 23, 69, 95, 63, 94, 61, 78, 56, 39, 91, 26, 44, 41], [44, 10, 18, 55, 19, 80, 23, 69, 95, 63, 94, 61, 78, 56, 39, 91, 26, 44], [12, 44, 10, 18, 55, 19, 80, 23, 69, 95, 63, 94, 61, 78, 56, 39, 91, 26], [20, 12, 44, 10, 18, 55, 19, 80, 23, 69, 95, 63, 94, 61, 78, 56, 39, 91], [20, 20, 12, 44, 10, 18, 55, 19, 80, 23, 69, 95, 63, 94, 61, 78, 56, 39], [48, 20, 20, 12, 44, 10, 18, 55, 19, 80, 23, 69, 95, 63, 94, 61, 78, 56]]));
