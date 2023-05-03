//              parametros
function funcao(a, b, c, d) {
    // arguments lê todos os argumentos passados quando chamado uma função
    console.log(a, b);
}
//      argumentos
funcao("Valor", 1, 2, 3, 4, 'teste');

// função que soma 2 números e não passando argumento para b:
// se b não for passado vai dar um NAN, aí tem como corrigir isso de 2 formas:

// 1 forma: atribuir valor a B dentro dos parametros
function soma(a, b = 0) {
// 2 forma: b ou é b ou é 0; maneira antiga
    // b = b || 0;
    console.log(a + b);
}

soma(2);

// como utilizar o rest operator numa funcao:

function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador  === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;

    }
}

// a lógica é a seguinte: eu quero pegar todo o resto depois do '0' que é o acumulador, então na função eu coloco como ...numeros
conta('+', 0, 20, 30, 50, 20);