/**
 * Created 2018/08/31 11:52 By lvmingyin
 */


// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true;

  function balanced(node) {
    if (!node) return 0;
    let left = balanced(node.left);
    let right = balanced(node.right);
    if (typeof left === 'number' && typeof right === 'number') {
      left += 1;
      right += 1;
      return Math.abs(left - right) <= 1 ? left > right ? left : right : false;
    }
    return false;
  }

  const l = balanced(root.left);
  const r = balanced(root.right);
  return typeof l === 'number' && typeof r === 'number' && Math.abs(l - r) <= 1;
};

const r = new TreeNode(1);
r.left = new TreeNode(2);
r.right = new TreeNode(2);

r.left.left = new TreeNode(3);
r.left.right = new TreeNode(3);

r.left.left.left = new TreeNode(4);
r.left.left.right = new TreeNode(4);

// r.right.left = new TreeNode(3);

console.log(isBalanced(r));
