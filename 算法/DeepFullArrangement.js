/**
 * Created 2018/01/26 17:00 By lvmingyin
 */

const n = 9;
const arr = new Array(n + 1);
const book = new Array(n + 1);
book.fill(0);
arr.fill(0);

function dfs(step) {
    if (step - 1 === n) {
        let num = '';
        for (let i = 1; i <= n; i++) {

            num += arr[i];
        }
        console.log(num);
        return;
    }


    for (let i = 1; i <= n; i++) {
        if (book[i] === 0) {
            arr[step] = i;
            book[i] = 1;
            dfs(step + 1);
            book[i] = 0;
        }
    }
}

dfs(1);
