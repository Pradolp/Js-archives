// Objetos 

// como funciona um objeto:
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
// uma função dentro do objeto
    fala (){
        console.log(`A minha idade atual é: ${this.idade}`)
    },
    incrementarIdade (){
        this.idade++;
    }
};
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
pessoa.fala();
pessoa.incrementarIdade();
pessoa.fala();

// como criar uma factor(uma função que cria objetos)
console.log('-------------------------------------------------')
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa1 = criaPessoa('Carlos', 'Prado', 50);
const pessoa2 = criaPessoa('Vasco', 'da Gama', 124);

console.log(`Nome da pessoa 1 : ${pessoa1.nome},Nome da pessoa 2: ${pessoa2.nome}`);