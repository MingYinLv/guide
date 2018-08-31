/**
 * Created 2018/08/31 11:24 By lvmingyin
 */


//Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 1) return new TreeNode(nums[0]);
  else if (nums.length === 0) return null;
  const middle = Math.floor(nums.length / 2);
  const self = new TreeNode(nums[middle]);
  self.left = sortedArrayToBST(nums.slice(0, middle));
  self.right = sortedArrayToBST(nums.slice(middle + 1));
  return self;
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
