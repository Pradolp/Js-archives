let num1 = 10.2359891283;
let num2 = 3;
let num3 = 12;

// para transformar o número numa String
num3 = num3.toString();
console.log(typeof(num3));

// trasnformando um número em binário:
console.log(num2.toString(2));

// para arredondar casas decimais o valor dentro do parenteses se refere ao que está depois da virgula
console.log(num1.toFixed(2));

// Verificando se um número é inteiro ou não
console.log(Number.isInteger(num1));
console.log(Number.isInteger(num2));

// Verificar se a conca é Nan(Not a Number)
let temp = num1 * 'ola';
console.log(Number.isNaN(temp));

// trasnformando um valor quebrado para inteiro
let num4 = 0.7;
let num5 = 0.1;

num4 += 0.1; //0.8
num4 += 0.1; //0.9
num4 += 0.1; //1.0

console.log(num4);
// utilizando uma forma boba
// isso não é correto pq mesmo arredondando não foi transformado em inteiro
// deixei comentando pq se não da erro na outra função
// num4 = num4.toFixed(2);
// console.log(num4);

// podemos verificar se ele é inteiro assim:
console.log(Number.isInteger(num4));

// então uma meneira seria:
num4 = Number(num4.toFixed(2));





