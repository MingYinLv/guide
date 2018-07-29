/**
 * Created 2018/07/23 15:58 By lvmingyin
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {

  if (needle === '') return 0;
  needle = needle.split('');
  haystack = haystack.split('');
  let len = needle.length;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let isEquals = true;
      for (let j = 0; j < len / 2; j++) {
        if (haystack[i + j] !== needle[j] || haystack[i + len - j - 1] !== needle[len - j - 1]) {
          isEquals = false;
          break;
        }
      }
      if (isEquals) {
        return i;
      }
    }
  }

  return -1;

};
console.log(strStr('hello', 'll'));
