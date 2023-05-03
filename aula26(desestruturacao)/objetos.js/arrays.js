
const numeros = [
//                0  1  2 
/*  linha 0 */   [1, 2, 3],
/*  linha 1 */   [4, 5, 6],
/*  linha 2 */   [7, 8, 9]
];

// então se eu quiser um número por exemplo: 9;
//                  l  c
console.log(numeros[1][2]);
// outra forma também:

const [lista1, lista2, lista3] = numeros;

// resltado esperado: [7,8,9]
console.log(lista3);

// resyktadi esoeradi> 4
console.log(lista2[0]);

// 
// alterando ordem de ltras
let a = 'A';
let b = 'B';
let c = 'C';

// Isso aqui é poderoso
const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);

// utilizando Atriubuição via desestruturação:

const numbers = [1, 2, 3, 4, 5, 6];

const [numero1, numero2, ...resto] = numbers;

console.log(numero1, numero2);
console.log(resto);

