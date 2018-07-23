/**
 * Created 2018/07/23 15:34 By lvmingyin
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1 && !l2) {
    return [];
  } else if (!l1) {
    return l2;
  } else if (!l2) {
    return l1;
  }

  let list = null;
  if (l1.val < l2.val) {
    list = new ListNode(l1.val);
    l1 = l1.next;
  } else {
    list = new ListNode(l2.val);
    l2 = l2.next;
  }

  list.next = new ListNode(0);
  let last = list.next;


  while (l1 || l2) {
    if (l1 && l2) {
      if (l1.val < l2.val) {
        last.val = l1.val;
        l1 = l1.next;
      } else {
        last.val = l2.val;
        l2 = l2.next;
      }
    } else if (l1) {
      last.val = l1.val;
      l1 = l1.next;
    } else {
      last.val = l2.val;
      l2 = l2.next;
    }
    if (l1 || l2) {
      last.next = new ListNode(0);
      last = last.next;
    }
  }
  return list;
};
