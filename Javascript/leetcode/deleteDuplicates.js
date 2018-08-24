/**
 * Created 2018/08/24 11:09 By lvmingyin
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if(!head) return head;
  let curr = head;
  let next = head.next;
  while(next){
    if(curr.val === next.val){
      curr.next = next.next;
      if(!curr) return head;
      next = curr.next;
    }else{
      curr = curr.next;
      if(!curr) return head;
      next = curr.next;
    }
  }
  return head;
};
