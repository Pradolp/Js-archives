// Arrays:

const alunos = ['Luiz', 'Maria', 'João'];

// para mostrar somente um indicíe  
console.log(alunos[0]);

// Alterando um array:
alunos[0] = 'Eduardo';
console.log(alunos)

// adicionando no array
alunos[3] = 'Lucas'
console.log(alunos);

// para ver o tamanho do array:
console.log(alunos.length)

// outra forma de adicionar:
console.log('----------------')
alunos[alunos.length] = 'José';
alunos[alunos.length] = 'Aurora';
alunos[alunos.length] = 'Lora';
console.log(alunos);
console.log(alunos.length);

// Adicionando só que usando uma função(maneira mais prática):
alunos.push('Carla');
console.log(alunos);

// ------------------------------------------------------- |
// Todos esses mostrados acima são para adicionar no final |
// ------------------------------------------------------- |

// Pra adicionar no começo do array

alunos.unshift('Inicio');
console.log(alunos);

// Remover do final

alunos.pop();
alunos.pop();
alunos.pop();
console.log(alunos);

// Removendo do começo
console.log('-------------------')
const remover = alunos.shift();
// pra mostrar o removido
console.log(remover);
console.log(alunos);

// também da pra usar slice

console.log(alunos.slice(0, 3));