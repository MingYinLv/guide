/**
 * Created 2018/03/02 16:19 By lvmingyin
 */


var maximumProduct = function (nums) {
    nums = nums.sort(function (n, m) {
        return m - n;
    });
    var length = nums.length;

    if (nums[length - 1] > 0 || length === 3) {
        return nums[0] * nums[1] * nums[2];
    }

    var o = [[0, 1, 2], [0, 1, length - 1], [0, length - 1, length - 2], [length - 1, length - 2, length - 3]];
    var result = Math.max(nums[o[0][0]] * nums[o[0][1]] * nums[o[0][2]],
        nums[o[1][0]] * nums[o[1][1]] * nums[o[1][2]],
        nums[o[2][0]] * nums[o[2][1]] * nums[o[2][2]],
        nums[o[3][0]] * nums[o[2][1]] * nums[o[3][2]]);
    return result;

};

console.log(maximumProduct([-5, -6, -4, -7, -3, 0]));
