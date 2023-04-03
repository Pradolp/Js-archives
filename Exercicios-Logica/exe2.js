// const ePaisagem = (altura, largura) =>{
//     return largura > altura ? true : false;
// }

// Refatorando:
// Já que a condição return largura > altura for verdadeira ele já vai retornar true e se for falsa já vai retonar false, não preciso colocar as condiçoes ? e :

// const ePaisagem = (altura, largura) =>{
//     return largura > altura;
// }

// Mais uma Refatoração:
const ePaisagem = (altura, largura) =>  largura > altura 


console.log(ePaisagem(20, 45));