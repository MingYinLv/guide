function bubbleSort(array) {
    let n = array.length;
    // 需要对n-1个数进行归位，所以i<n-1
    for (let i = 0; i < n - 1; i++) {
        // i表示已归位的元素数量，所以对i后面的数进行排序。
        for (let j = i; j < n - 1; j++) {
            // 对当前元素和下一个元素排序，如果当前元素大于下一个元素，进行交换
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
            console.log('r');
        }
    }
    return array;
}

console.log(bubbleSort([43, 31, 97, 66, 48]))