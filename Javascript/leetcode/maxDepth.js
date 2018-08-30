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
  let max = 0;
  let current = 1;

  function next(node) {
    if (!node) return;
    current++;
    next(node.left);
    next(node.right);
    current--;
    if (current > max) {
      max = current;
    }
  }

  next(root);
  return max;
};

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(2);




console.log(maxDepth(tree));

