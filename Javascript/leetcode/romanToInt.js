/**
 * Created 2018/07/23 15:33 By lvmingyin
 */

const oneMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const twoMap = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};

/**
 * @param {string} s @return {number}
 */
const romanToInt = function (s) {
  const nums = [];
  Object.keys(twoMap).forEach((n) => {
    const reg = new RegExp(n, 'g');
    const match = s.match(reg);
    if (match) {
      nums.push(twoMap[n] * match.length);
      s = s.replace(reg, '');
    }
  });

  Object.keys(oneMap).forEach((n) => {
    const reg = new RegExp(n, 'g');
    const match = s.match(reg);
    if (match) {
      nums.push(oneMap[n] * match.length);
      s = s.replace(reg, '');
    }
  });
  return nums.reduce(((result, n) => result + n), 0);
};
