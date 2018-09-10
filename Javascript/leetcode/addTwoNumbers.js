/**
 * Created 2018/03/05 16:51 By lvmingyin
 */


function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (!l1 && !l2) return null;
  else if (!l1) return l2;
  else if (!l2) return l1;

  let l1next = l1.next;
  let l2next = l2.next;
  let temp = l1.val + l2.val;
  let add = Math.floor(temp / 10);
  const result = new ListNode(temp % 10);
  result.next = new ListNode();
  let prev = result;
  let next = result.next;
  while (l1next || l2next) {
    const l1val = l1next ? l1next.val : 0;
    const l2val = l2next ? l2next.val : 0;
    temp = l1val + l2val + add;
    add = Math.floor(temp / 10);
    next.val = temp % 10;
    next.next = new ListNode();
    prev = next;
    next = next.next;
    l1next = l1next ? l1next.next : null;
    l2next = l2next ? l2next.next : null;
  }
  if (add === 1) {
    next.val = 1;
  } else {
    prev.next = null;
  }
  return result;
};

var l1 = new ListNode(9);
l1.next = new ListNode(9);
l1.next.next = new ListNode(9);

var l2 = new ListNode(9);
l2.next = new ListNode(9);
l2.next.next = new ListNode(9);
//

console.log(JSON.stringify(addTwoNumbers(l1, l2)));
