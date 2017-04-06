
function quickSort(array){
	if(array.length <= 1){
		// 如果只有一个，直接返回结果
		return array;
	}
	// 选择中间的数为基准
	let index = Math.floor(array.length / 2);
	let value = array.splice(index, 1)[0];	// 把基准值从原数组中移除
	let left = [];
	let right = [];
	
	for(let i=0;i<array.length;i++){
		if(array[i]<value){
			// 如果小于基准值，放到左边
			left.push(array[i]);
		}else{
			// 大于或等于基准值，放到右边
			right.push(array[i]);
		}
	}
	
	// 递归拼接
	return quickSort(left).concat([value], quickSort(right));
}

console.log(quickSort([43, 31, 97, 66, 48]))