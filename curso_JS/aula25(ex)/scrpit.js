const data = new Date();
const getDay = data.getDay();
const month = data.getMonth();
const title = document.querySelector('#title');


function getWeekDay(getDay) {
    let diaSemanaTexto;
    switch (getDay) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-Feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-Feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-Feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-Feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-Feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabádo';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = 'Não existente';
            return diaSemanaTexto;
    }
}

function getMonth(month) {
    let nomeMes;

    switch (month) {
        case 0:
            nomeMes = 'Janeiro';
            return nomeMes;
        case 1:
            nomeMes = 'Fevereiro';
            return nomeMes;
        case 2:
            nomeMes = 'Março';
            return nomeMes;
        case 3:
            return nomeMes = Fevereiro;

        case 4:
            return nomeMes = Fevereiro;

        case 5:
            return nomeMes = Fevereiro;

        case 6:
            return nomeMes = Fevereiro;

        case 7:
            return nomeMes = Fevereiro;

        case 8:
            return nomeMes = Fevereiro;

        case 9:
            return nomeMes = Fevereiro;

        case 10:
            return nomeMes = Fevereiro;
        case 0:
            return nomeMes = Fevereiro;
    }
}

title.innerHTML = `<p> ${getWeekDay(getDay)}, ${getMonth(month)}  </p>`;