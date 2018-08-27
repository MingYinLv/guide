/**
 * Created 2018/08/27 18:21 By lvmingyin
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const str = s.match(/[a-zA-Z0-9]/g);
  if (!str || str.length <= 1) return true;


  const len = str.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (str[i].toLowerCase() !== str[len - i - 1].toLowerCase()) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome('ab'));
