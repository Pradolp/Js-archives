function mostrarHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-Br', {
        hour12: false
    });
}

const timer = setInterval(function (){
console.log(mostrarHora());

}, 1000);

setTimeout(function () {
    clearInterval(timer);
    console.log("teste")
}, 5000);
