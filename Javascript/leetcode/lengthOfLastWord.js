/**
 * Created 2018/08/19 18:16 By lvmingyin
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {

  const arr = s.split('');
  while (arr[arr.length - 1] === ' ') {
    arr.pop();
  }

  let num = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === ' ') break;
    num++;
  }
  return num;
};

console.log(lengthOfLastWord('a '));
