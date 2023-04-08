function getTimeSecond(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-Br', {
        hour12: false,
        timeZone: 'GMT'
    });
}



const timer = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let incrementar;

function startCount(){
     incrementar = setInterval(function (){
        segundos++ ;
        timer.innerHTML = getTimeSecond(segundos);
    }, 1000);
}


// Colocando tudo dentro de uma função:

document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('zerar')){
        clearInterval(incrementar);
        segundos = 0;
        timer.innerHTML = "00:00:00";
        timer.classList.remove('pausado');
    }

    if(el.classList.contains('pausar')){
        clearInterval(incrementar);
        timer.classList.add('pausado');
    }

    if(el.classList.contains('iniciar')){
        clearInterval(incrementar);
        startCount();
        timer.classList.remove('pausado');
    
    }
    
});



// iniciar.addEventListener('click', function(){
//     clearInterval(incrementar);
//     startCount();
//     timer.classList.remove('pausado');

    

// })

// pausar.addEventListener('click', function(){
//     clearInterval(incrementar);
//     timer.classList.add('pausado');
// })

// zerar.addEventListener('click', function(){
//     clearInterval(incrementar);
//     segundos = 0;
//     timer.innerHTML = "00:00:00";
//     timer.classList.remove('pausado');
// })