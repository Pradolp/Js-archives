const nums = [2, 11, 9, 24, 5, 7, 23, 12, 7];
let numsMaior10 = [];

for(let i of nums){
    if(i>10) numsMaior10.push(i);
}
console.log(numsMaior10);
// utilizando o filter para fazer a mesma coisa:

const numsFiltrados = nums.filter(valor => valor > 10);
console.log(numsFiltrados);

const pessoasFiltter = pessoas.filter(valor => valor.idade )

const pessoas = [
    {nome: 'Lucas', idade: 23},
    {nome: 'Carlos', idade: 42},
    {nome: 'vovo', idade: 85},
    {nome: 'Davi', idade: 18},
    {nome: 'Zélia', idade: 42}
]

const pessoasComLetraSNoFinal = pessoas.filter(valor => {
    valor.nome.toLowerCase().endsWith('s')
})
console.log(pessoasComLetraSNoFinal);