/**
 * Created 2018/03/02 17:38 By lvmingyin
 */

var maxProduct = function (nums) {
    var length = nums.length;
    var value = nums[0];
    for (var i = 0; i < length; i++) {
        var tmp = nums[i];
        for (var j = i; j < length; j++) {
            if(i === j){
                tmp = nums[j];
            }else{
                tmp *= nums[j];
            }
            if (tmp > value) {
                value = tmp;
            }
        }
    }
    return value;
};

console.log(maxProduct([0, 2]));
