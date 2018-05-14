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

    var l1val = l1.val;
    var l2val = l2.val;
    l1 = l1.next;
    l2 = l2.next;
    while ((l1 || l2)) {
        var l1tmp = l1 && l1.val ? l1.val : 0;
        var l2tmp = l2 && l2.val ? l2.val : 0;
        l1val = l1val + 10 * l1tmp;
        l2val = l2val + 10 * l2tmp;
        console.log(l1val, l2val);
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    var result = l1val + l2val;
    console.log(result);
    var resultNode = null;
    var nextNode = null;
    for (var i = 0; result > 0 || i === 0; result = Math.floor(result / 10), i++) {
        var tmp = result % 10;
        if (!resultNode) {
            resultNode = new ListNode(tmp);
            nextNode = resultNode;
            continue;
        }
        nextNode.next = new ListNode(tmp);
        nextNode = nextNode.next;
    }

    return resultNode;
};

var l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

var l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
//
// var l1 = new ListNode(1);
// l1.next = new ListNode(8);
//
// var l2 = new ListNode(0);

console.log(JSON.stringify(addTwoNumbers(l1, l2)));
