// function criaMultiplicador(multiplicador, n){
//     function conta(n){
//        return n * multiplicador;
//     }
//     return conta;
// }

// pode ser escrito dessa forma tbm:

function criaMultiplicador(multiplicador){
    
    return function(n){
       return n * multiplicador;
    }

}
const teste = criaMultiplicador(4);
const enviandoPteste = teste(2);
console.log(enviandoPteste);


