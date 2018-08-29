/**
 * Created 2018/08/29 10:11 By lvmingyin
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let add = 0;
  a = a.split('').reverse();
  b = b.split('').reverse();
  const result = [];
  while (a.length || b.length) {
    const aVal = Number(a[0] || 0);
    const bVal = Number(b[0] || 0);
    result.push((aVal ^ bVal) ^ add);
    a.splice(0, 1);
    b.splice(0, 1);
    if (aVal === 1 && bVal === 1 || ((aVal === 1 || bVal === 1) && add === 1)) {
      add = 1;
    } else {
      add = 0;
    }
  }
  if (add === 1) result.push(1);
  return result.reverse().join('');
};

console.log(addBinary('1010', '1011'));
