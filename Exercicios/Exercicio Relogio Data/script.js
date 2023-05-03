// let title = document.querySelector('#title');
// const data = new Date();

// MANEIRA 1

// function getDayName(day) {
//     let dayName;

//     switch (day) {
//         case 0:
//             dayName = 'Domingo';
//             return dayName;
//         case 1:
//             dayName = 'Segunda-Feira';
//             return dayName;
//         case 2:
//             dayName = 'Terça-Feira';
//             return dayName;
//         case 3:
//             dayName = 'Quarta-Feira';
//             return dayName;
//         case 4:
//             dayName = 'Quinta-Feira';
//             return dayName;
//         case 5:
//             dayName = 'Sexta-Feira';
//             return dayName;
//         case 6:
//             dayName = 'Sabádo';
//             return dayName;
//     }
// }

// function getMonthName(month) {
//     let monthName;

//     switch (month) {

//         case 0:
//             monthName = 'Janerio';
//             return monthName;
//         case 1:
//             monthName = 'Fevereiro';
//             return monthName;
//         case 2:
//             monthName = 'Março';
//             return monthName;
//         case 3:
//             monthName = 'Abril';
//             return monthName;
//         case 4:
//             monthName = 'Maio';
//             return monthName;
//         case 5:
//             monthName = 'Junho';
//             return monthName;
//         case 6:
//             monthName = 'Julho';
//             return monthName;
//         case 7:
//             monthName = 'Agosto';
//             return monthName;
//         case 8:
//             monthName = 'Setembro';
//             return monthName;
//         case 9:
//             monthName = 'Outubro';
//             return monthName;
//         case 10:
//             monthName = 'Novembro';
//             return monthName;
//         case 11:
//             monthName = 'Dezembro';
//             return monthName;

//     }
// }

// function zeroLeft (num){
//     return num >=10 ? num : `0${num}`;
// }

// function creatDate(data){
//     const day = data.getDay();
//     const dateDay = data.getDate();
//     const month = data.getMonth();
//     const year = data.getFullYear();
//     const hour = data.getHours();
//     const minutes = data.getMinutes();

//     const dayName = getDayName(day);
//     const monthName = getMonthName(month);
//     console.log(dayName, monthName)

//     return (`${getDayName(day)}, ${dateDay} de ${getMonthName(month)} de ${year} 
//      ${zeroLeft(hour)}:${zeroLeft(minutes)}`);
// }

// title.innerHTML = creatDate(data);



// MANEIRA 2

let title = document.querySelector('#title');
const data = new Date();

// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};


// console.log(data.toLocaleDateString('pt-BR',options ));

title.innerHTML = (new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeStyle: 'short'}).format(data));