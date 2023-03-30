const nome = 'Lucas';
const sobrenome = 'Prado';
const idade = 22;
const peso = 74;
const alturaEmM = 1.85;
const anoAtual = 2022;
let imc = peso / (alturaEmM*idade);
let anoNascimento = anoAtual - idade;

console.log(nome,sobrenome,"tem",idade,"anos, pesa", peso, "kg", "tem", alturaEmM, "e seu IMC é de:", imc);

// maneira mais atual de fazer concatenação
console.log(`${nome}, nasceu em: ${anoNascimento}`);

