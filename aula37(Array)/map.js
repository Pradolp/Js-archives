
const nums = [2, 11, 9, 24, 5, 7, 23, 12, 7];

const dobro = nums.map(valor => valor * 2);
console.log(dobro);

const pessoas = [
    {nome: 'Lucas', idade: 23},
    {nome: 'Carlos', idade: 42},
    {nome: 'vovo', idade: 85},
    {nome: 'Davi', idade: 18},
    {nome: 'Zélia', idade: 42}
]

const nomePessoas = pessoas.map(ojb => ojb.nome)
const idades = pessoas.map(obj => ({idade: obj.idade}))
const criandoId = pessoas.map((obj, indicie) =>{
// como copiar objetos e arrays:
    const newObj = {...obj};
    newObj.id = indicie + 1;
    return newObj;
})
console.log(idades);