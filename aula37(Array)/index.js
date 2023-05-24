// Transformando String em array:

const nome = 'Lucas Prado';
// Remove os espaços em brancos
const repla = nome.replace(' ', '');
// Separa a nova Variavel, criando um array
const novo = repla.split('');
console.log(novo);

// separando por espaços:
const outroNome = 'Lucas Prado';
console.log(outroNome.split(' '));
// transformando um array em String:
const nomeArr = [ 'Lucas', 'Prado' ];
const arrToString = nomeArr.join(' ');
console.log(arrToString);