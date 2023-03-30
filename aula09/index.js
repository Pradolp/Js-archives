//               01234567
let umaString = "Um texto bem grande para usar de exemplo";

console.log(umaString);

// para pegar a letra referente ao indicie
console.log(umaString[3]);

// faz a mesma coisa, porém utilizando uma função da String
console.log(umaString.charAt(6))

// para descobrir a partir de qual indicie começa alguma palavra:
console.log(umaString.indexOf('texto'));

// para ver o indicie de uma palavra especifica que começa após determinado indicie:
                        //    word. indice
console.log(umaString.indexOf('exto', 2));

// trocando uma palavra por outra
console.log(umaString.replace('Um', 'Texto'));

// para verificar o tamanho de uma String
// length é um atributo não função
console.log(umaString.length);

// para selecionar o start pegando um indicie e finilizando em outro indiice
console.log(umaString.slice(2, 8));

// usando slice com números negativos
console.log(umaString.slice(-4))

// mesma coisa
console.log(umaString.slice(-5, -1));

// separando uma String a partir de algum ponto
//                               esse número se refere a quantidade de vezes que ele quer que a String se separe
console.log(umaString.split(' ', 3))

let text = "We are the so-called \"Vikings\" from the north.";
console.log(text);