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


  function next(pois) {
    if (!pois.length) return true;
    let arr = [];
    let val = matrix[pois[0][0]][pois[0][1]];
    let result = true;
    for (let i = 0; i < pois.length; i++) {
      const [tmpR, tmpC] = pois[i];
      if (val !== matrix[tmpR][tmpC]) {
        result = false;
      }

      if (tmpR - 1 >= 0) {
        arr.push([tmpR - 1, tmpC]);
      }
      if (tmpC + 1 < c) {
        arr.push([tmpR, tmpC + 1]);
      }
    }
    return result && next(arr);
  }

  return next([[r - 1, 0]]);
};

console.log(isToeplitzMatrix([[19, 80, 23, 69, 95, 63, 94, 61, 78, 56, 39, 91, 26, 44, 41, 9, 18, 64], [55, 19, 80, 23, 69, 95, 63, 94, 61, 78, 56, 39, 91, 26, 44, 41, 9, 18], [18, 55, 19, 80, 23, 69, 95, 63, 94, 61, 78, 56, 39, 91, 26, 44, 41, 9], [10, 18, 55, 19, 80, 23, 69, 95, 63, 94, 61, 78, 56, 39, 91, 26, 44, 41], [44, 10, 18, 55, 19, 80, 23, 69, 95, 63, 94, 61, 78, 56, 39, 91, 26, 44], [12, 44, 10, 18, 55, 19, 80, 23, 69, 95, 63, 94, 61, 78, 56, 39, 91, 26], [20, 12, 44, 10, 18, 55, 19, 80, 23, 69, 95, 63, 94, 61, 78, 56, 39, 91], [20, 20, 12, 44, 10, 18, 55, 19, 80, 23, 69, 95, 63, 94, 61, 78, 56, 39], [48, 20, 20, 12, 44, 10, 18, 55, 19, 80, 23, 69, 95, 63, 94, 61, 78, 56]]));
