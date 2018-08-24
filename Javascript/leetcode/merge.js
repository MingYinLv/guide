/**
 * Created 2018/08/24 11:10 By lvmingyin
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

  function insert(i, val) {
    for (let j = 0; j < m - i; j++) {
      nums1[m - j] = nums1[m - j - 1];
    }
    nums1[i] = val;
    m++;
  }

  let index = 0;
  let nIndex = 0;
  while (index < m) {
    if (nums1[index] > nums2[0]) {
      insert(index, nums2.splice(0, 1)[0]);
      nIndex++;
    }
    index++;

    if (nIndex >= n) break;
  }
  if (index >= m && nIndex < n) {
    for (let i = 0; i < n - nIndex; i++) {
      nums1[index + i] = nums2[i];
    }
  }
};

