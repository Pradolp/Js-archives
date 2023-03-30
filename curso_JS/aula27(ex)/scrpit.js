const paragrafos = document.querySelectorAll('p');
const container = document.querySelector('.container');

// selecionando um estilo do body
const estiloBody = getComputedStyle(document.body);
const backgroudColorBody = estiloBody.backgroundColor;
console.log(backgroudColorBody);

for(let p of paragrafos){
    p.style.color = 'white';
    p.style.background = 'rgb(255, 127, 80)'
}