
const nums = [2, 11, 9, 24, 5, 7, 23, 12, 7];

// const total = nums.reduce(function(acumulador, valor){
//     acumulador += valor;
//     return acumulador;
// }, 0)
// reduzindo

const total = nums.reduce((acumulador, valor) => {
    if(valor % 2 === 0) acumulador += valor;
    return acumulador;
}, 0);
// console.log(total);








const pessoas = [
    { nome: 'Lucas', idade: 23 },
    { nome: 'Carlos', idade: 42 },
    { nome: 'vovo', idade: 85 },
    { nome: 'Davi', idade: 18 },
    { nome: 'Zélia', idade: 42 }
]

const checarMaisVelho = pessoas.reduce((acc,valor) => {
    
    if(acc.idade > valor.idade ){
        console.log(acc, valor);
        return acc;
    }
    console.log(acc, valor);
    return valor;
})