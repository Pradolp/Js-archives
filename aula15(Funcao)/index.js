// Funções

// Exemplo 1
function teste(){
   return 'Isso é um teste'
}

console.log(teste());


function saudacao(nome) {
    return `Bom dia ${nome}`;
}

const nome = saudacao('Luiz');
console.log(nome);

// Exemplo 2
function soma(x, y){
    const resultado = x + y;
    console.log(typeof(resultado));
    return resultado;
}
// maneiras de usar a função:
// eu quero chamar ela e chamando eu posso passar os valores dela:
const resultado = parseInt(soma(30, 15));
console.log(resultado);

console.log(soma(2, 2));
console.log(soma(7, 5));


