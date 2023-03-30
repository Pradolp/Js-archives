const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Prado',
    idade: 22 ,
    endereco: {
        rua: 'David Kasas',
        numero: 29220,
        complemento: ''
    }
};

// Atribuição por desestruturação:

const {nome, sobrenome } = pessoa;
console.log(nome, sobrenome);

// se por exemplo eu quero mudar o nome de uma chave do objeto, por exemplo, quero que idade passe a se chamar valorIdade;

const{idade: valorIdade = '12'} = pessoa;
console.log(valorIdade);

// como imprimir o objeto dentro do objeto;
const{endereco: { rua, numero}, endereco} = pessoa;

console.log(endereco);

console.log(rua, numero);