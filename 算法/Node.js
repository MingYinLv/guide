/**
 * Created 2018/01/26 14:57 By lvmingyin
 */

function Node(data, next) {
    this.data = data;
    this.next = next || null;
}

let first = new Node(0);

let tmp = first;
for (let i = 1; i < 10; i++) {
    tmp.next = new Node(i);
    tmp = tmp.next;
}

tmp = first;
while (tmp) {
    console.log(tmp.data);
    tmp = tmp.next;
}

console.log(JSON.stringify(first));
