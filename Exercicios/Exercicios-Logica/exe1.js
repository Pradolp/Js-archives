
// Primeira vez:
// function maiorNumero(x, y){
//     if(x > y){
//         return x;
//     }else{
//         return y;
//     }

// }

// Refatorando Segunda vez:
// function maiorNumero(x, y){
//     if(x > y){
//         return x;
//     }
//         return y;
// }

// Refatorando a Terceira vez:
// Uma condição ternária
function maiorNumero(x, y){
    return x > y ? x : y;
}

console.log(maiorNumero(10,2));