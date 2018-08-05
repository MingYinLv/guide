/**
 * Created 2018/07/29 20:52 By lvmingyin
 */

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  function next(str, curr) {
    if (curr === n) return str.join('');
    if (str.length === 1) return next(['1', '1'], curr + 1);
    let prev = str[0];
    let total = 1;
    const result = [];

    for (let i = 1; i < str.length; i++) {
      if (prev === str[i]) {
        total += 1;
      } else {
        result.push('' + total, prev);
        total = 1;
        prev = str[i];

      }
    }

    if (total > 0) {
      result.push('' + total, prev);
    }
    return next(result, curr + 1);
  }

  return next(['1'], 1);
};

console.log(countAndSay(5));
