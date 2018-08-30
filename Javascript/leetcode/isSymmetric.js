/**
 * Created 2018/08/29 11:06 By lvmingyin
 */

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let total = 0;
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;

  function symmetric(left, right) {
    if (left && right && (left.val === right.val)) {
      return symmetric(left.left, right.right) && symmetric(left.right, right.left);
    } else if (left === right) {
      return true;
    } else {
      return false;
    }
  }

  return symmetric(root.left, root.right);
};

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(2);

tree.left.left = new TreeNode(3);
tree.left.right = new TreeNode(4);

tree.right.left = new TreeNode(4);
tree.right.right = new TreeNode(3);


console.log(isSymmetric(tree));
