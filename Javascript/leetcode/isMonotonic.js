/**
 * Created 2018/10/10 11:42 By lvmingyin
 */
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {

  if (A.length <= 2) return true;

  let isAdd = true;
  let isSub = true;
  let prev = A[0];
  for (let i = 1; i < A.length; i++) {
    if (prev > A[i] && isAdd) {
      isAdd = false;
    } else if (prev < A[i] && isSub) {
      isSub = false;
    }
    prev = A[i];
  }
  return isAdd || isSub;
};

console.log(isMonotonic([1,1,1]));
