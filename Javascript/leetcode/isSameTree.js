/**
 * Created 2018/08/29 10:47 By lvmingyin
 */


// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p && q && (p.val === q.val)) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  } else if (p === q) {
    return true;
  } else {
    return false;
  }
};

const l = new TreeNode(1);
l.left = new TreeNode(2);
l.right = new TreeNode(3);

const r = new TreeNode(1);
r.left = new TreeNode(2);
r.right = new TreeNode(3);

console.log(isSameTree(l, r));
