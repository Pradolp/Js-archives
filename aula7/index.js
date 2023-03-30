const num1 = 2;
const num2 = 10;
const num3 = 3;
// 2 elevado a 10:
console.log(2**10)
// espaço
console.log('---------------------------------------------------------')
// para pegar o resto da divisão %:
console.log(num2%num3);
// espaço
console.log('---------------------------------------------------------')

// contador:
let contador = 1;
contador++;
console.log(contador);
contador++;
console.log(contador);
contador++;
console.log(contador);
contador++;
console.log(contador);

// espaço
console.log
('---------------------------------------------------------')

// o operador de incremento pode ser usado antes da variável
contador = 1;
console.log(contador)
console.log(++contador);

// espaço
console.log
('---------------------------------------------------------')

const passo = 3;
contador = 0;
contador += passo;
console.log(contador);
contador += passo;
console.log(contador);
contador += passo;
console.log(contador);

console.log
('---------------------------------------------------------')

// transformando uma variável para outro tipo
const num4 = 10;
const num5 = parseInt('5'); //forcei a String a se transfomrar em inteiro. 
console.log(num4 + num5);
let num6 = parseFloat('6.7'); //nessa forcei a a virar um flutuante
console.log(num4 + num6);
num6 = Number('5.5'); //Nesse caso eu forço a máquina a entender qual o tipo do número
console.log(num4 + num6);

