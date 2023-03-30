const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Prado',
    idade: '22',
    endereco: {
        rua: 'David Kauffman',
        numero: 8282
    }
};

//     declarando um valor padrão
const {nome = 'Não Existe', sobrenome, idade: teste } = pessoa;
console.log(nome, sobrenome, teste);