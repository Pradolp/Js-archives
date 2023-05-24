const arr1 = [1,2,3];
const arr2 = [4, 5, 6];
// usando o concat:
const concat = arr1.concat(arr2);
// usando ...spread
const arr3 = [...arr1, ...arr2, 'Se quiser adicionar outra coisa', ...[7,2,3]];
console.log(concat.join(' '));
console.log(arr3);