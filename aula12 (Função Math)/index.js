// Função Math

let num1 = 12.4982;

// utilizando a função math para arrendodar o número para baixo
let num2 = Math.floor(num1);
console.log(num2);

// utilizando a função math para arrendodar o número para cima
num2 = Math.ceil(num1);
console.log(num2);

// utilizando a função math para arrendodar o número para o número mais perto(sendo para cima ou para baixo)
num2 = Math.round(num1);
console.log(num2);

// pegando o maior número de uma sequência
console.log(Math.max(1,2,100,55.21, 100.5,4, -3));

// pegando o menor número de uma sequência
console.log(Math.min(1,2,100,55.21, 100.5,4, -3));

// gerando um número inteiro aleátorio
// https://www.w3schools.com/js/js_random.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const aleatorio = Math.round(Math.random() * 10) + 1;
console.log(aleatorio);

// como pegar a raiz quadrada de um número
let numEx = 9;
// sinal de ** é potência
console.log(numEx ** 0.5);
// Usando a função math:
console.log(Math.sqrt(numEx));
