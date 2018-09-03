/**
 * Created 2018/09/03 10:54 By lvmingyin
 */

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (!root) return false;

  function add(node, num) {
    if (!node && num === sum) return true;
    else if (!node) return false;
    const tmp = node.val + num;
    if (tmp === sum && !node.left && !node.right) return true;
    else if (!node.left && !node.right) return false;
    else if (!node.left) return add(node.right, tmp);
    else if (!node.right) return add(node.left, tmp);
    return add(node.left, tmp) || add(node.right, tmp);
  }

  if (!root.left) {
    return add(root.right, root.val);
  } else if (!root.right) {
    return add(root.left, root.val);
  }
  return add(root.left, root.val) || add(root.right, root.val);
};

const r = new TreeNode(5);
r.left = new TreeNode(4);
r.right = new TreeNode(8);

r.left.left = new TreeNode(11);

r.left.left.left = new TreeNode(7);
r.left.left.right = new TreeNode(2);

r.right.left = new TreeNode(13);
r.right.right = new TreeNode(4);
r.right.right.right = new TreeNode(1);

// const r = new TreeNode(1);
// r.left = new TreeNode(2);
// r.left.left = new TreeNode(3);
// r.left.left.left = new TreeNode(4);

console.log(hasPathSum(r, 22));
