/**
 * Created 2018/08/30 10:25 By lvmingyin
 */

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  const result = [];
  let current = 0;

  function next(node) {
    if (!node) return;
    result[current] = result[current] || [];
    result[current].push(node.val);
    current++;
    next(node.left);
    next(node.right);
    current--;
  }

  next(root);
  return result.reverse();
};

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(2);

tree.left.left = new TreeNode(3);
tree.left.right = new TreeNode(4);

tree.right.left = new TreeNode(4);
tree.right.right = new TreeNode(3);

console.log(levelOrderBottom(tree));
