function meuEscopo (){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')
    const paragrafo = document.querySelector('.paragrafo')
    const pessoas = [];

    function recebeEventoForm (evento){
        evento.preventDefault();

        const nome = form.querySelector('#nome');
        const sobrenome = form.querySelector('#sobrenome')
        const peso = form.querySelector('#peso')
        const altura = form.querySelector('#altura')
        // console.log(nome, sobrenome, peso, altura);
        
        pessoas.push ({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            atlura: altura.value
        })

        console.log(pessoas);

        paragrafo.innerHTML += `${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} <br>`
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();