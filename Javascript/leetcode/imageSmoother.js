/**
 * Created 2018/10/11 10:57 By lvmingyin
 */

/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {

  const position = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  const result = [];
  for (let i = 0; i < M.length; i++) {
    const tmp = M[i];
    result[i] = result[i] || [];
    for (let j = 0; j < tmp.length; j++) {
      let size = 1;
      let total = M[i][j];
      for (let m = 0; m < position.length; m++) {
        const x = i + position[m][0];
        const y = j + position[m][1];
        if (x >= 0 && x < M.length && y >= 0 && y < M[i].length) {
          total += M[x][y];
          size += 1;
        }
      }
      result[i][j] = Math.floor(total / size);
    }
  }
  return result;
};

console.log(imageSmoother([[1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]]));
