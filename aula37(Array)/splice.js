const nums = [1, 2, 3, 5, 8, 9, 9, 23, 1];
//            0  1  2  3  4  5  6  7   8

const remove = nums.splice(2, 2);

console.log(nums, remove);

// tbm aceita números negativos:

const removeNeg = nums.splice(-2, 2);
console.log(removeNeg);