// const soma = (x,y) =>{
//     if(typeof x!== 'number' || typeof y !== 'number'){
//         throw new Error('x e y precisam ser numbers');
//     }
//     return x+ y;
// }
// try{
//     console.log(soma(1, 2));
//     console.log(soma('1', 2));

// }catch(err){
//     // console.log(err);
// }

// const timestamp = new Date().getTime();
// console.log(timestamp); 
// // 👉️ 1673598370158

// const date = new Date(timestamp);
// console.log(date); // 👉️ Fri Jan 13 2023 10:26:10

// console.log(date.toLocaleString('pt-BR')); // 👉️ "1/20/2022, 9:50:15 AM"

// const birthday = new Date(2024, 0, 01);
// const milliSeconds = new Date(birthday).getTime(); // the month is 0-indexed


// const sub = timestamp - milliSeconds;
// var diffDays = Math.ceil(sub / (1000 * 3600 * 24)); 
// console.log(milliSeconds);

// console.log(diffDays);

var date1 = new Date();
var date2 = new Date("01/01/2024");
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
var diffMonth = diffDays/30;z
var diffHours = diffDays * 24;

console.log(diffHours);
console.log(diffDays);
console.log((diffMonth));