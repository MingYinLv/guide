/**
 * Created 2018/08/30 10:06 By lvmingyin
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;

  const left = maxDepth(root.left) + 1;
  const right = maxDepth(root.right) + 1;

  return left > right ? left : right;
};

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(2);
tree.left.left = new TreeNode(3);

console.log(maxDepth(tree));

