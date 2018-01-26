/**
 * Created 2018/01/26 15:47 By lvmingyin
 */

// 数火柴

function compute(x) {
    let num = 0;

    let f = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];

    String(x).split('').forEach((n) => {
        num += Number(f[n]);
    });
    return num;

}

function start() {
    let a = 0, // 加数a
        b = 0, // 加数b
        c = 0, // 结果c
        m = 18,// 火柴数量m
        sum = 0;//成功数量

    for (a = 0; a <= 1111; a++) {
        for (b = 0; b <= 1111; b++) {
            c = a + b;
            if (compute(a) + compute(b) + compute(c) === m - 4) {
                console.log(`${a} + ${b} = ${c}`);
                sum++;
            }
        }
    }

    console.log(`一共可以拼出个${sum}不同的等式`);

}

start();
