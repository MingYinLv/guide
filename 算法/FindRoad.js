/**
 * Created 2018/01/26 17:58 By lvmingyin
 */

const map = [
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 1],
];

const book = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];
const minBook = [];
let result = [];

const next = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
];

let p = 3, // 目标x
    q = 2, // 目标y
    n = 4,
    m = 5,
    min = 99;

function dfs(x, y, step) {
    let tx = 0, ty = 0;
    if (x === p && y === q) {
        if (step < min) {
            min = step;
            result = JSON.parse(JSON.stringify(minBook));
        }
        return;
    }

    for (let i = 0; i < next.length; i++) {
        tx = x + next[i][0];
        ty = y + next[i][1];
        // 越界
        if (tx < 0 || tx >= n || ty < 0 || ty >= m) continue;

        if (map[tx][ty] === 0 && !book[tx][ty]) {
            book[tx][ty] = 1;
            minBook.push([tx, ty]);
            dfs(tx, ty, step + 1);
            minBook.pop();
            book[tx][ty] = 0;
        }
    }
}

function find() {
    book[0][0] = 1; // 起始坐标
    dfs(0, 0, 0);
    console.log(min, result);
}

find();


