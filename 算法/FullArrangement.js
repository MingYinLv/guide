/**
 * Created 2018/01/26 16:02 By lvmingyin
 */

// 数的全排列

function findMaxNum(n) {
    return Math.max(...String(n).split(''));
}

function findMinNum(n) {
    return Math.min(...String(n).split(''));
}

/**
 * 指定一个数n，输出1-n的全排列
 * @param n
 */
function arrangement(n) {
    const arr = new Array(n + 1);
    let max = n;
    let min = 1;
    for (let i = n - 1; i > 0; i--) {
        max = max * 10 + i;
        min = min * 10 + (n - i + 1);
    }

    for (let i = max; i >= min; i--) {
        if (findMaxNum(i) > n || findMinNum(i) < 1) continue;
        const s = String(i).split('');

        let eq = false;
        for (let x = 0; x < s.length; x++) {
            for (let y = 0; y < s.length; y++) {
                if (s[x] === s[y] && x !== y) {
                    eq = true;
                    break;
                }
            }
            if (eq) break;
        }
        if (!eq) console.log(i);
    }

}

arrangement(9);
