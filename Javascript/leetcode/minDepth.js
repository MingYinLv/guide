/**
 * Created 2018/08/31 16:54 By lvmingyin
 */


//Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) {
    return 1;
  }

  function depth(node) {
    if (!node) return 0;
    if (node.left && node.right) {
      const left = depth(node.left) + 1;
      const right = depth(node.right) + 1;
      return left < right ? left : right;
    } else if (node.left) {
      return depth(node.left) + 1;
    } else if (node.right) {
      return depth(node.right) + 1;
    }
    return 1;
  }

  const l = depth(root.left) + 1;
  const r = depth(root.right) + 1;
  if (l === 1) {
    return r;
  } else if (r === 1) {
    return l;
  }
  return l < r ? l : r;

};

const r = new TreeNode(1);
r.left = new TreeNode(9);
r.left.left = new TreeNode(9);
r.left.left.left = new TreeNode(9);


console.log(minDepth(r));
