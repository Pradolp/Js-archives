function calcularFat(x){
    let variavel = 1;
    for(let i = 1; i <= x; i++){
        variavel = variavel * i;
    }
    return variavel;
}
const container = document.querySelector('.container');
const calc = document.querySelector('#calc');
const resultado = document.querySelector('#resultado')

calc.addEventListener('click', function(){
    const num = document.querySelector('#num').value;
    const valor = calcularFat(num);
    console.log(valor);
    resultado.classList.add('bold');
    resultado.innerHTML = valor;
    
})
// fatorial: 5! = 5.4.3.2.1;