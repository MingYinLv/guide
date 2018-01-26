/**
 * Created 2018/01/24 17:19 By lvmingyin
 */

// 队列
class Queue {
    data = [];
    head = 1;
    tail = 1;
}


const q = new Queue();

for (let i = 0; i < 10; i++) {
    q.data[q.tail] = i;
    q.tail++;
}

while (q.head < q.tail) {
    console.log(q.data[q.head]);
    q.head++;

    q.data[q.tail] = q.data[q.head];

    q.tail++;
    q.head++;
}
