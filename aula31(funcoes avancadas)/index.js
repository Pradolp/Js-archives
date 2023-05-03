// Funções são First-Classe objects

// function expression = jogar uma funcao numa variável
const souUmDado = function(){
    console.log("olá mundo");
}

function executaFuncao(funcao){
    funcao();
}

executaFuncao(souUmDado);

// Arrow Function ECMA Scrpit 6
//                    PARAMETRO
const functionArrow = algumaCoisa => {
    console.log(algumaCoisa);
}
functionArrow("Ai Meu Deus alguma Coisa");

// Testando function dentro de objtos:

const obj = {
    olaMundo(){
        console.log('Estou aqui');
    },
    nome: 'Lucas',
    idade: 22
};

for(let chave in obj){
    console.log(chave,":",obj[chave]);
}

const {nome = '', idade, olaMundo = 'nada de mais'} = obj;
console.log(nome);