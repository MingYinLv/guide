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
  let l = 0;
  let r = 0;
  let index = 0;
  while (l1 || l2) {
    if (l1) {
      l += l1.val * Math.pow(10, index);
      l1 = l1.next;
    }
    if (l2) {
      r += l2.val * Math.pow(10, index);
      l2 = l2.next;
    }
    index++;
  }
  let val = l + r;
  const result = new ListNode(val % 10);
  console.log(val);
  let tmp = result;
  val = Math.floor(val / 10);
  while (val > 0) {
    tmp.next = new ListNode(val % 10);
    val = Math.floor(val / 10);
    tmp = tmp.next;
  }
  return result;
};

var l1 = new ListNode(1);
l1.next = new ListNode(0);
l1.next.next = new ListNode(0);
l1.next.next.next = new ListNode(0);
l1.next.next.next.next = new ListNode(0);
l1.next.next.next.next.next = new ListNode(1);

var l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
//

console.log(JSON.stringify(addTwoNumbers(l1, l2)));
