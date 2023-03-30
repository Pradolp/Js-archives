// caso fosse uma const, como transformar em Number:
// const num1 = Number(prompt('Digite um númeroo'));
// Variáveis:
let num1 = prompt('Digite um númeroo');
num1 = Number(num1);
let raizQuadrada = Math.sqrt(num1);
const verificarNumeroInteiro = Number.isInteger(num1);
const mathFloor = Math.floor(num1);
const mathCeil = Math.ceil(num1);
// Selecionando partes com o JavaScript
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = num1;
texto.innerHTML = `<p> Raiz quadrada: ${raizQuadrada} <br> </p>`;
texto.innerHTML += `${num1} é inteiro? ${verificarNumeroInteiro} <br>`;
texto.innerHTML += `É NaN? ${Number.isNaN(num1)} <br>`;
texto.innerHTML += `Arrendado para baixo: ${mathFloor}<br>`;
texto.innerHTML += `Arrendado para cima: ${mathCeil} <br>`;
texto.innerHTML += `Com duas casas decimais: ${num1.toFixed(2)}  <br>`;

// document.body.innerHTML = `Raiz quadrada: ${raizQuadrada} <br>`;
// document.body.innerHTML += `${num1} é inteiro? ${verificarNumeroInteiro} <br>`;
// document.body.innerHTML += `É NaN? ${Number.isNaN(num1)} <br>`;
// document.body.innerHTML += `Arrendado para baixo: ${mathFloor}<br>`;
// document.body.innerHTML += `Arrendado para cima: ${mathCeil}<br>`
// document.body.innerHTML += `Com duas casas decimais: ${num1.toFixed(2)} <br>`