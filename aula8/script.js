// uma maneira de fazer:
// const num1 = prompt('Digite um número');
// const num2 = prompt('Digite outro número');

// console.log(typeof num1, typeof num2)

// let resultado = Number(num1) + Number(num2);
// console.log(typeof num1, typeof num2)

// alert(`O resultado foi: ${resultado}`);
//---------------------------------------------
// outra:

let num1 = prompt('Digite um número');
let num2 = prompt('Digite outro número');

console.log(typeof num1, typeof num2)

num1 = Number(num1);
num2 = Number(num2);

console.log(typeof num1, typeof num2)

const resultado = num1 + num2;

alert(`O resultado foi: ${resultado}`);
