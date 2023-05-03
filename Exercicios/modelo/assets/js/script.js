
// capturar evento de submit do form
const form = document.querySelector("#form");

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const peso = form.querySelector('#peso').value;
    const altura = form.querySelector('#altura').value;

    const imc = getImc(peso, altura);
    const groupImc = getImcGroup(imc);  
    
    const msg = `Seu IMC é: ${imc} e você está no grupo: ${groupImc}`
    resultado(msg);
})

function getImcGroup(imc){
    const group = ['Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if(imc > 40){
        return group[4];
    }

    if(imc > 34,9){
        return group[3];
    }

    if(imc >= 29,9){
        return group[2];
    }

    if(imc > 24,9){
        return group[1]
    }

    return group[0];
}


function getImc(peso, altura){
    const imc = peso/altura ** 2;
    return imc.toFixed(2);
}

function criaP(){
    const p = document.createElement('p');
    return p;
}

function resultado (msg){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const p = criaP();
    p.classList.add('paragrafo-resultado');
    p.innerHTML = msg;
    resultado.appendChild(p);
}
