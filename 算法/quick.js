function quick(array) {
  if (array.length <= 1) return array;

  // 获得中间索引，向下取整
  const index = Math.floor(array.length / 2);
  const left = [];
  const right = [];
  // 从原始数组中移除，然后获得移除的值
  const value = array.splice(index, 1)[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < value) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  // 递归执行
  return quick(left).concat(value, quick(right));
}

console.log(quick([43, 31, 97, 66, 48]));
